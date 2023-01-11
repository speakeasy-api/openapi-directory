import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignpublicip_enum as shared_assignpublicip_enum


@dataclass_json
@dataclasses.dataclass
class NetworkConfiguration:
    r"""NetworkConfiguration
    The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
    """
    
    assign_public_ip: Optional[shared_assignpublicip_enum.AssignPublicIPEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPublicIp') }})
    
