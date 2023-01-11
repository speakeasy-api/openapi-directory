import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsvpcconfiguration as shared_awsvpcconfiguration


@dataclass_json
@dataclasses.dataclass
class NetworkConfiguration:
    r"""NetworkConfiguration
    This structure specifies the network configuration for an ECS task.
    """
    
    awsvpc_configuration: Optional[shared_awsvpcconfiguration.AwsVpcConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsvpcConfiguration') }})
    
