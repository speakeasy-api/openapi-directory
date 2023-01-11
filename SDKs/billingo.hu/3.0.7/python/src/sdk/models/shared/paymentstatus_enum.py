import dataclasses
from enum import Enum

class PaymentStatusEnum(str, Enum):
    EXPIRED = "expired"
    NONE = "none"
    OUTSTANDING = "outstanding"
    PAID = "paid"
    PARTIALLY_PAID = "partially_paid"

