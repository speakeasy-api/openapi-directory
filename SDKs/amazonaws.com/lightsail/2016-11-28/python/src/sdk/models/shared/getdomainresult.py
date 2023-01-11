import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domain as shared_domain


@dataclass_json
@dataclasses.dataclass
class GetDomainResult:
    domain: Optional[shared_domain.Domain] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    
