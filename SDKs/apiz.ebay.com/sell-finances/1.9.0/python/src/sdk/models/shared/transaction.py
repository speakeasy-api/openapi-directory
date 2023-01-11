import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount
from ..shared import buyer as shared_buyer
from ..shared import orderlineitem as shared_orderlineitem
from ..shared import reference as shared_reference


@dataclass_json
@dataclasses.dataclass
class Transaction:
    r"""Transaction
    This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
    """
    
    amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    booking_entry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingEntry') }})
    buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    fee_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeType') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    order_line_items: Optional[list[shared_orderlineitem.OrderLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItems') }})
    payments_entity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsEntity') }})
    payout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    references: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    sales_record_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesRecordReference') }})
    total_fee_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFeeAmount') }})
    total_fee_basis_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFeeBasisAmount') }})
    transaction_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDate') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    transaction_memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionMemo') }})
    transaction_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    transaction_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionType') }})
    
