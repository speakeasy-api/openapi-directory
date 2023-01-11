import dataclasses
from enum import Enum

class OnlinePaymentEnum(str, Enum):
    UNKNOWN = ""
    BARION = "Barion"
    SIMPLE_PAY = "SimplePay"
    NO = "no"

