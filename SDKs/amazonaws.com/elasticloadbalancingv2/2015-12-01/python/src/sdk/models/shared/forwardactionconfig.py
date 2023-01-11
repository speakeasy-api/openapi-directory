import dataclasses
from typing import Optional
from ..shared import targetgroupstickinessconfig as shared_targetgroupstickinessconfig
from ..shared import targetgrouptuple as shared_targetgrouptuple


@dataclasses.dataclass
class ForwardActionConfig:
    r"""ForwardActionConfig
    Information about a forward action.
    """
    
    target_group_stickiness_config: Optional[shared_targetgroupstickinessconfig.TargetGroupStickinessConfig] = dataclasses.field(default=None)
    target_groups: Optional[list[shared_targetgrouptuple.TargetGroupTuple]] = dataclasses.field(default=None)
    
