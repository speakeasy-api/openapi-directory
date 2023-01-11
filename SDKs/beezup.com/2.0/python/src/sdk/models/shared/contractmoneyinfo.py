import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContractMoneyInfo:
    r"""ContractMoneyInfo
    Describe the pricing information related to the offer.
    """
    
    amount_excluding_taxes_and_excluding_code_promo_discount_including_billing_period_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount') }})
    amount_excluding_taxes_and_excluding_discounts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountExcludingTaxesAndExcludingDiscounts') }})
    amount_excluding_taxes_including_discounts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountExcludingTaxesIncludingDiscounts') }})
    amount_excluding_taxes_including_discounts_per_month: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountExcludingTaxesIncludingDiscountsPerMonth') }})
    amount_including_taxes_excluding_discount_including_billing_period_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount') }})
    amount_including_taxes_including_discounts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountIncludingTaxesIncludingDiscounts') }})
    amount_taxes_excluding_discount_including_billing_period_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountTaxesExcludingDiscountIncludingBillingPeriodDiscount') }})
    amount_taxes_including_discounts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountTaxesIncludingDiscounts') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    initial_offer_fixed_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialOfferFixedPrice') }})
    vat_percent: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatPercent') }})
    
