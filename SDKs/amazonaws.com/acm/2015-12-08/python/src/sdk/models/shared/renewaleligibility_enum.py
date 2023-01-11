import dataclasses
from enum import Enum

class RenewalEligibilityEnum(str, Enum):
    ELIGIBLE = "ELIGIBLE"
    INELIGIBLE = "INELIGIBLE"

