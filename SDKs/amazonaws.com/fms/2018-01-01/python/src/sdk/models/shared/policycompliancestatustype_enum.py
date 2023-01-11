import dataclasses
from enum import Enum

class PolicyComplianceStatusTypeEnum(str, Enum):
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"

