import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentmethod_enum as shared_paymentmethod_enum


@dataclass_json
@dataclasses.dataclass
class PaymentHistory:
    date_: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payment_method: shared_paymentmethod_enum.PaymentMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_method') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    conversion_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion_rate') }})
    voucher_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucher_number') }})
    
