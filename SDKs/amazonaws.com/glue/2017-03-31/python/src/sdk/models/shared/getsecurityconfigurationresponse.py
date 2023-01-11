import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityconfiguration as shared_securityconfiguration


@dataclass_json
@dataclasses.dataclass
class GetSecurityConfigurationResponse:
    security_configuration: Optional[shared_securityconfiguration.SecurityConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfiguration') }})
    
