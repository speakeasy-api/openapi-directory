import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contractbillingperiodinfo as shared_contractbillingperiodinfo
from ..shared import contractbonusinfo as shared_contractbonusinfo
from ..shared import contractclickinfo as shared_contractclickinfo
from ..shared import contractcommitmentinfo as shared_contractcommitmentinfo
from ..shared import contractdiscountinfo as shared_contractdiscountinfo
from ..shared import contractmoneyinfo as shared_contractmoneyinfo
from ..shared import contractstoreinfo as shared_contractstoreinfo
from ..shared import previousfixperiodinvoiceproratainfo as shared_previousfixperiodinvoiceproratainfo


@dataclass_json
@dataclasses.dataclass
class OfferContent:
    contract_billing_period_info: shared_contractbillingperiodinfo.ContractBillingPeriodInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractBillingPeriodInfo') }})
    contract_bonus_info: shared_contractbonusinfo.ContractBonusInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractBonusInfo') }})
    contract_click_info: shared_contractclickinfo.ContractClickInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractClickInfo') }})
    contract_commitment_info: shared_contractcommitmentinfo.ContractCommitmentInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractCommitmentInfo') }})
    contract_discount_info: shared_contractdiscountinfo.ContractDiscountInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractDiscountInfo') }})
    contract_money_info: shared_contractmoneyinfo.ContractMoneyInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractMoneyInfo') }})
    contract_store_info: shared_contractstoreinfo.ContractStoreInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractStoreInfo') }})
    notify_vat_exemption: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyVatExemption') }})
    previous_fix_period_invoice_prorata_info: shared_previousfixperiodinvoiceproratainfo.PreviousFixPeriodInvoiceProrataInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousFixPeriodInvoiceProrataInfo') }})
    contract_termination_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractTerminationReason') }})
    contract_termination_reason_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractTerminationReasonType') }})
    
