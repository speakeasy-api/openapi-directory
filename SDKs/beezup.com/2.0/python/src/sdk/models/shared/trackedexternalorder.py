import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trackedexternalorderproduct as shared_trackedexternalorderproduct


@dataclass_json
@dataclasses.dataclass
class TrackedExternalOrder:
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    payment_validated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentValidated') }})
    total_amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('utcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    products: Optional[list[shared_trackedexternalorderproduct.TrackedExternalOrderProduct]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    visitor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitorId') }})
    
