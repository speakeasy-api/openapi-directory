import dataclasses
from enum import Enum

class ReceiptFilterPolicyEnum(str, Enum):
    BLOCK = "Block"
    ALLOW = "Allow"

