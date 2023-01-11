import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetManagedPrefixListAssociationsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
