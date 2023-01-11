import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vulnerability as shared_vulnerability


@dataclass_json
@dataclasses.dataclass
class VulnerableComponent:
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    cvss_max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvss_max') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    vulnerabilities: Optional[list[shared_vulnerability.Vulnerability]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerabilities') }})
    
