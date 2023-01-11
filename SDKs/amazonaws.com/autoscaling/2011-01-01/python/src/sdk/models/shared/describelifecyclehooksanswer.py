import dataclasses
from typing import Optional
from ..shared import lifecyclehook as shared_lifecyclehook


@dataclasses.dataclass
class DescribeLifecycleHooksAnswer:
    lifecycle_hooks: Optional[list[shared_lifecyclehook.LifecycleHook]] = dataclasses.field(default=None)
    
