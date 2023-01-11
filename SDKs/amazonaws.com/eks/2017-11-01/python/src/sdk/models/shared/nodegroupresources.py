import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggroup as shared_autoscalinggroup


@dataclass_json
@dataclasses.dataclass
class NodegroupResources:
    r"""NodegroupResources
    An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
    """
    
    auto_scaling_groups: Optional[list[shared_autoscalinggroup.AutoScalingGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    remote_access_security_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSecurityGroup') }})
    
