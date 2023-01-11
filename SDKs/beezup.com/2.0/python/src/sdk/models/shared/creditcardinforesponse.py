import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentmethod_enum as shared_paymentmethod_enum
from ..shared import beezup_common_infosummaries as shared_beezup_common_infosummaries
from ..shared import creditcardinforesponselinks as shared_creditcardinforesponselinks


@dataclass_json
@dataclasses.dataclass
class CreditCardInfoResponse:
    current_payment_method: shared_paymentmethod_enum.PaymentMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPaymentMethod') }})
    links: shared_creditcardinforesponselinks.CreditCardInfoResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    credit_card_info: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditCardInfo') }})
    info: Optional[shared_beezup_common_infosummaries.BeezUpCommonInfoSummaries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    
