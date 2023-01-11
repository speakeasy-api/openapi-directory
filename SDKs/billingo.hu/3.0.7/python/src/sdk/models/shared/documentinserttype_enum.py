import dataclasses
from enum import Enum

class DocumentInsertTypeEnum(str, Enum):
    ADVANCE = "advance"
    DRAFT = "draft"
    INVOICE = "invoice"
    PROFORMA = "proforma"

