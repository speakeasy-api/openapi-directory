import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usageallocation as shared_usageallocation


@dataclass_json
@dataclasses.dataclass
class UsageRecord:
    r"""UsageRecord
    <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
    """
    
    customer_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerIdentifier') }})
    dimension: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimension') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    usage_allocations: Optional[list[shared_usageallocation.UsageAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageAllocations') }})
    
