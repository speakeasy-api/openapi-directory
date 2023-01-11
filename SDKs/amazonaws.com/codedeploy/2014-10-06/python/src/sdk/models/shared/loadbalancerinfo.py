import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import elbinfo as shared_elbinfo
from ..shared import targetgroupinfo as shared_targetgroupinfo
from ..shared import targetgrouppairinfo as shared_targetgrouppairinfo


@dataclass_json
@dataclasses.dataclass
class LoadBalancerInfo:
    r"""LoadBalancerInfo
    Information about the Elastic Load Balancing load balancer or target group used in a deployment.
    """
    
    elb_info_list: Optional[list[shared_elbinfo.ElbInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elbInfoList') }})
    target_group_info_list: Optional[list[shared_targetgroupinfo.TargetGroupInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroupInfoList') }})
    target_group_pair_info_list: Optional[list[shared_targetgrouppairinfo.TargetGroupPairInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroupPairInfoList') }})
    
