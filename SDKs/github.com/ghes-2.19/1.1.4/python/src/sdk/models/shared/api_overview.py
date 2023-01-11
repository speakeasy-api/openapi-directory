import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class APIOverview:
    r"""APIOverview
    Api Overview
    """
    
    verifiable_password_authentication: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiable_password_authentication') }})
    dependabot: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependabot') }})
    github_services_sha: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github_services_sha') }})
    installed_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installed_version') }})
    packages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    
