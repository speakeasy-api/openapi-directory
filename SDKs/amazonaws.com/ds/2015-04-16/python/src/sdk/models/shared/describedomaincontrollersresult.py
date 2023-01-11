import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaincontroller as shared_domaincontroller


@dataclass_json
@dataclasses.dataclass
class DescribeDomainControllersResult:
    domain_controllers: Optional[list[shared_domaincontroller.DomainController]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainControllers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
