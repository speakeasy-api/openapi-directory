import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import recurringchargelist as shared_recurringchargelist


@dataclasses.dataclass
class ReservedCacheNodeList:
    r"""ReservedCacheNodeList
    Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
    """
    
    cache_node_count: Optional[int] = dataclasses.field(default=None)
    cache_node_type: Optional[str] = dataclasses.field(default=None)
    duration: Optional[int] = dataclasses.field(default=None)
    fixed_price: Optional[float] = dataclasses.field(default=None)
    offering_type: Optional[str] = dataclasses.field(default=None)
    product_description: Optional[str] = dataclasses.field(default=None)
    recurring_charges: Optional[list[shared_recurringchargelist.RecurringChargeList]] = dataclasses.field(default=None)
    reservation_arn: Optional[str] = dataclasses.field(default=None)
    reserved_cache_node_id: Optional[str] = dataclasses.field(default=None)
    reserved_cache_nodes_offering_id: Optional[str] = dataclasses.field(default=None)
    start_time: Optional[datetime] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    usage_price: Optional[float] = dataclasses.field(default=None)
    
