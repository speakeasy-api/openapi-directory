import dataclasses
from enum import Enum

class APIKeyEnum1(str, Enum):
    US_LOWER = "us"
    CA_LOWER = "ca"
    US_UPPER = "US"
    CA_UPPER = "CA"

