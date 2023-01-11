import dataclasses
from enum import Enum

class BonusTypeEnum(str, Enum):
    ONLINE_PAYMENT_METHOD_BONUS = "OnlinePaymentMethodBonus"
    PREVIOUS_INVOICE_PRORATA_BONUS = "PreviousInvoiceProrataBonus"
    PREVIOUS_CONTRACT_BONUS = "PreviousContractBonus"

