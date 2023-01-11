import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_channelbasicinfo as shared_beezup_common_channelbasicinfo
from ..shared import trackedorderproduct as shared_trackedorderproduct


@dataclass_json
@dataclasses.dataclass
class TrackedOrder:
    channel: shared_beezup_common_channelbasicinfo.BeezUpCommonChannelBasicInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    payment_validated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentValidated') }})
    products: list[shared_trackedorderproduct.TrackedOrderProduct] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    total_amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('utcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
