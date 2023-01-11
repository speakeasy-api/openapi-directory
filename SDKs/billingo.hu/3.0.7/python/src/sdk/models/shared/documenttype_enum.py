import dataclasses
from enum import Enum

class DocumentTypeEnum(str, Enum):
    ADVANCE = "advance"
    CANCELED = "canceled"
    CANCELLATION = "cancellation"
    DRAFT = "draft"
    INVOICE = "invoice"
    PROFORMA = "proforma"

