import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trafficroute as shared_trafficroute
from ..shared import targetgroupinfo as shared_targetgroupinfo


@dataclass_json
@dataclasses.dataclass
class TargetGroupPairInfo:
    r"""TargetGroupPairInfo
     Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. 
    """
    
    prod_traffic_route: Optional[shared_trafficroute.TrafficRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prodTrafficRoute') }})
    target_groups: Optional[list[shared_targetgroupinfo.TargetGroupInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroups') }})
    test_traffic_route: Optional[shared_trafficroute.TrafficRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTrafficRoute') }})
    
