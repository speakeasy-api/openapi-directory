import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityconfiguration as shared_securityconfiguration


@dataclass_json
@dataclasses.dataclass
class GetSecurityConfigurationsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    security_configurations: Optional[list[shared_securityconfiguration.SecurityConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfigurations') }})
    
