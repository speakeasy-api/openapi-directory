import dataclasses
from typing import Optional
from ..shared import recurringchargelist as shared_recurringchargelist


@dataclasses.dataclass
class ReservedCacheNodesOfferingList:
    r"""ReservedCacheNodesOfferingList
    Describes all of the attributes of a reserved cache node offering.
    """
    
    cache_node_type: Optional[str] = dataclasses.field(default=None)
    duration: Optional[int] = dataclasses.field(default=None)
    fixed_price: Optional[float] = dataclasses.field(default=None)
    offering_type: Optional[str] = dataclasses.field(default=None)
    product_description: Optional[str] = dataclasses.field(default=None)
    recurring_charges: Optional[list[shared_recurringchargelist.RecurringChargeList]] = dataclasses.field(default=None)
    reserved_cache_nodes_offering_id: Optional[str] = dataclasses.field(default=None)
    usage_price: Optional[float] = dataclasses.field(default=None)
    
