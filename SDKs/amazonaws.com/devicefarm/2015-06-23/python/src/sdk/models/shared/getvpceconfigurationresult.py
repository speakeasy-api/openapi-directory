import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpceconfiguration as shared_vpceconfiguration


@dataclass_json
@dataclasses.dataclass
class GetVpceConfigurationResult:
    vpce_configuration: Optional[shared_vpceconfiguration.VpceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfiguration') }})
    
