import dataclasses
from enum import Enum

class TLSPolicyEnum(str, Enum):
    REQUIRE = "REQUIRE"
    OPTIONAL = "OPTIONAL"

