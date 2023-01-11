import dataclasses
from typing import Optional


@dataclasses.dataclass
class DescribeLifecycleHookTypesAnswer:
    lifecycle_hook_types: Optional[list[str]] = dataclasses.field(default=None)
    
