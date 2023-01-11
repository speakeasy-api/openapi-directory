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
class MeterUsageRequest:
    product_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    usage_dimension: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageDimension') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    usage_allocations: Optional[list[shared_usageallocation.UsageAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageAllocations') }})
    usage_quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageQuantity') }})
    
