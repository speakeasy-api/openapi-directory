import dataclasses
from enum import Enum

class FulfillmentStateEnum(str, Enum):
    FULFILLED = "Fulfilled"
    FAILED = "Failed"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"

