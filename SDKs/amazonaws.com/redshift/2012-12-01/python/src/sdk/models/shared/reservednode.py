import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import recurringchargelist as shared_recurringchargelist
from ..shared import reservednodeofferingtype_enum as shared_reservednodeofferingtype_enum


@dataclasses.dataclass
class ReservedNode:
    r"""ReservedNode
    Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. 
    """
    
    currency_code: Optional[str] = dataclasses.field(default=None)
    duration: Optional[int] = dataclasses.field(default=None)
    fixed_price: Optional[float] = dataclasses.field(default=None)
    node_count: Optional[int] = dataclasses.field(default=None)
    node_type: Optional[str] = dataclasses.field(default=None)
    offering_type: Optional[str] = dataclasses.field(default=None)
    recurring_charges: Optional[list[shared_recurringchargelist.RecurringChargeList]] = dataclasses.field(default=None)
    reserved_node_id: Optional[str] = dataclasses.field(default=None)
    reserved_node_offering_id: Optional[str] = dataclasses.field(default=None)
    reserved_node_offering_type: Optional[shared_reservednodeofferingtype_enum.ReservedNodeOfferingTypeEnum] = dataclasses.field(default=None)
    start_time: Optional[datetime] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    usage_price: Optional[float] = dataclasses.field(default=None)
    
