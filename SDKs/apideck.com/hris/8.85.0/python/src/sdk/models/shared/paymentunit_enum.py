import dataclasses
from enum import Enum

class PaymentUnitEnum(str, Enum):
    HOUR = "hour"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    PAYCHECK = "paycheck"

