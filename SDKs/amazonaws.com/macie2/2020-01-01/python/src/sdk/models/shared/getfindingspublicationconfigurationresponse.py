import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityhubconfiguration as shared_securityhubconfiguration


@dataclass_json
@dataclasses.dataclass
class GetFindingsPublicationConfigurationResponse:
    security_hub_configuration: Optional[shared_securityhubconfiguration.SecurityHubConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityHubConfiguration') }})
    
