import dataclasses
from enum import Enum

class RobotSoftwareSuiteVersionTypeEnum(str, Enum):
    KINETIC = "Kinetic"
    MELODIC = "Melodic"
    DASHING = "Dashing"
    FOXY = "Foxy"

