import dataclasses
from enum import Enum

class InvoicePaymentStatusEnum(str, Enum):
    PAID = "Paid"
    NOT_PAID = "NotPaid"
    PARTIALLY_PAID = "PartiallyPaid"
    LOSS = "Loss"

