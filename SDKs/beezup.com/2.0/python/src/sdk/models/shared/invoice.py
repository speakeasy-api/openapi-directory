import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoicepaymentstatus_enum as shared_invoicepaymentstatus_enum


@dataclass_json
@dataclasses.dataclass
class Invoice:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    amount_to_be_paid: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountToBePaid') }})
    contract_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractId') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    due_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceNumber') }})
    payment_status: shared_invoicepaymentstatus_enum.InvoicePaymentStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentStatus') }})
    invoice_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceUrl') }})
    
