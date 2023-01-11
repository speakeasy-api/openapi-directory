import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buyer as shared_buyer
from ..shared import cancelstatus as shared_cancelstatus
from ..shared import fulfillmentstartinstruction as shared_fulfillmentstartinstruction
from ..shared import lineitem as shared_lineitem
from ..shared import paymentsummary as shared_paymentsummary
from ..shared import pricingsummary as shared_pricingsummary
from ..shared import program as shared_program
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class Order:
    r"""Order
    This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
    """
    
    buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_checkout_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerCheckoutNotes') }})
    cancel_status: Optional[shared_cancelstatus.CancelStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelStatus') }})
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    ebay_collect_and_remit_tax: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebayCollectAndRemitTax') }})
    fulfillment_hrefs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentHrefs') }})
    fulfillment_start_instructions: Optional[list[shared_fulfillmentstartinstruction.FulfillmentStartInstruction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentStartInstructions') }})
    last_modified_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate') }})
    legacy_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyOrderId') }})
    line_items: Optional[list[shared_lineitem.LineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    order_fulfillment_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderFulfillmentStatus') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    order_payment_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderPaymentStatus') }})
    payment_summary: Optional[shared_paymentsummary.PaymentSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentSummary') }})
    pricing_summary: Optional[shared_pricingsummary.PricingSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingSummary') }})
    program: Optional[shared_program.Program] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    sales_record_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesRecordReference') }})
    seller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerId') }})
    total_fee_basis_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFeeBasisAmount') }})
    total_marketplace_fee: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMarketplaceFee') }})
    
