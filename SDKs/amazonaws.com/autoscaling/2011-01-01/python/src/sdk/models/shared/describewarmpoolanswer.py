import dataclasses
from typing import Optional
from ..shared import instance as shared_instance
from ..shared import warmpoolconfiguration as shared_warmpoolconfiguration


@dataclasses.dataclass
class DescribeWarmPoolAnswer:
    instances: Optional[list[shared_instance.Instance]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    warm_pool_configuration: Optional[shared_warmpoolconfiguration.WarmPoolConfiguration] = dataclasses.field(default=None)
    
