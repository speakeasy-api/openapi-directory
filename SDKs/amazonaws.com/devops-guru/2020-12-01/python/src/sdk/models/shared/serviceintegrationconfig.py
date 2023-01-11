import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import opscenterintegration as shared_opscenterintegration


@dataclass_json
@dataclasses.dataclass
class ServiceIntegrationConfig:
    r"""ServiceIntegrationConfig
     Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager. 
    """
    
    ops_center: Optional[shared_opscenterintegration.OpsCenterIntegration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsCenter') }})
    
