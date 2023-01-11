import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum
from ..shared import documentitemdata as shared_documentitemdata
from ..shared import documentproductdata as shared_documentproductdata
from ..shared import documentlanguage_enum as shared_documentlanguage_enum
from ..shared import paymentmethod_enum as shared_paymentmethod_enum
from ..shared import documentsettings as shared_documentsettings
from ..shared import documentinserttype_enum as shared_documentinserttype_enum


@dataclass_json
@dataclasses.dataclass
class DocumentInsert:
    block_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_id') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    due_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fulfillment_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillment_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    language: shared_documentlanguage_enum.DocumentLanguageEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    partner_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner_id') }})
    payment_method: shared_paymentmethod_enum.PaymentMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_method') }})
    type: shared_documentinserttype_enum.DocumentInsertTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    bank_account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_account_id') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    conversion_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion_rate') }})
    electronic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electronic') }})
    items: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    paid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paid') }})
    settings: Optional[shared_documentsettings.DocumentSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    vendor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor_id') }})
    
