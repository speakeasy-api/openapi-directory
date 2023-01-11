import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeManagedPrefixListsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_lists: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
