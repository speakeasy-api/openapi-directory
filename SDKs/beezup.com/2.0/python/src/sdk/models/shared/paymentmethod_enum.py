import dataclasses
from enum import Enum

class PaymentMethodEnum(str, Enum):
    TRANSFER = "Transfer"
    DEBIT = "Debit"
    PAYPAL = "Paypal"
    CHECK = "Check"
    CREDIT_NOTE = "CreditNote"
    LOSS = "Loss"
    ONLINE_PAYMENT = "OnlinePayment"

