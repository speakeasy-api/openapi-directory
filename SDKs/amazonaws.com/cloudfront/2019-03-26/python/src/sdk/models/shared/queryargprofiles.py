import dataclasses
from typing import Optional
from ..shared import queryargprofilelist as shared_queryargprofilelist


@dataclasses.dataclass
class QueryArgProfiles:
    r"""QueryArgProfiles
    Query argument-profile mapping for field-level encryption.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_queryargprofilelist.QueryArgProfileList]] = dataclasses.field(default=None)
    
