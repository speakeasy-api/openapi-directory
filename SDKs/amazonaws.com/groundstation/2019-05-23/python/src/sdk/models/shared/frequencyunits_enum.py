import dataclasses
from enum import Enum

class FrequencyUnitsEnum(str, Enum):
    G_HZ = "GHz"
    M_HZ = "MHz"
    K_HZ = "kHz"

