import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import recurringchargelist as shared_recurringchargelist


@dataclasses.dataclass
class ReservedDbInstanceList:
    r"""ReservedDbInstanceList
     This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions. 
    """
    
    currency_code: Optional[str] = dataclasses.field(default=None)
    db_instance_class: Optional[str] = dataclasses.field(default=None)
    db_instance_count: Optional[int] = dataclasses.field(default=None)
    duration: Optional[int] = dataclasses.field(default=None)
    fixed_price: Optional[float] = dataclasses.field(default=None)
    lease_id: Optional[str] = dataclasses.field(default=None)
    multi_az: Optional[bool] = dataclasses.field(default=None)
    offering_type: Optional[str] = dataclasses.field(default=None)
    product_description: Optional[str] = dataclasses.field(default=None)
    recurring_charges: Optional[list[shared_recurringchargelist.RecurringChargeList]] = dataclasses.field(default=None)
    reserved_db_instance_arn: Optional[str] = dataclasses.field(default=None)
    reserved_db_instance_id: Optional[str] = dataclasses.field(default=None)
    reserved_db_instances_offering_id: Optional[str] = dataclasses.field(default=None)
    start_time: Optional[datetime] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    usage_price: Optional[float] = dataclasses.field(default=None)
    
