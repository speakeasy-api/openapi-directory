import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simpleamount as shared_simpleamount
from ..shared import infofrombuyer as shared_infofrombuyer
from ..shared import disputeevidence as shared_disputeevidence
from ..shared import evidencerequest as shared_evidencerequest
from ..shared import orderlineitems as shared_orderlineitems
from ..shared import monetarytransaction as shared_monetarytransaction
from ..shared import paymentdisputeoutcomedetail as shared_paymentdisputeoutcomedetail
from ..shared import returnaddress as shared_returnaddress


@dataclass_json
@dataclasses.dataclass
class PaymentDispute:
    r"""PaymentDispute
    This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
    """
    
    amount: Optional[shared_simpleamount.SimpleAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    available_choices: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableChoices') }})
    buyer_provided: Optional[shared_infofrombuyer.InfoFromBuyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerProvided') }})
    buyer_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerUsername') }})
    closed_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closedDate') }})
    evidence: Optional[list[shared_disputeevidence.DisputeEvidence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidence') }})
    evidence_requests: Optional[list[shared_evidencerequest.EvidenceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceRequests') }})
    line_items: Optional[list[shared_orderlineitems.OrderLineItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    monetary_transactions: Optional[list[shared_monetarytransaction.MonetaryTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monetaryTransactions') }})
    open_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openDate') }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    payment_dispute_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDisputeId') }})
    payment_dispute_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDisputeStatus') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    resolution: Optional[shared_paymentdisputeoutcomedetail.PaymentDisputeOutcomeDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    respond_by_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondByDate') }})
    return_address: Optional[shared_returnaddress.ReturnAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnAddress') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    seller_response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerResponse') }})
    
