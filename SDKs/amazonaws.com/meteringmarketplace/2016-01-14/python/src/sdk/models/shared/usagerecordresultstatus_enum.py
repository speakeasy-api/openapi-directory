import dataclasses
from enum import Enum

class UsageRecordResultStatusEnum(str, Enum):
    SUCCESS = "Success"
    CUSTOMER_NOT_SUBSCRIBED = "CustomerNotSubscribed"
    DUPLICATE_RECORD = "DuplicateRecord"

