import dataclasses
from enum import Enum

class ExtendedLicensesEnum(str, Enum):
    MULTISEAT = "Multiseat"
    UNLIMITED = "Unlimited"
    RESALE = "Resale"
    INDEMNIFICATION = "Indemnification"

