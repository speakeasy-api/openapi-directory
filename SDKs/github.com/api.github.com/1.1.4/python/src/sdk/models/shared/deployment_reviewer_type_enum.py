import dataclasses
from enum import Enum

class DeploymentReviewerTypeEnum(str, Enum):
    USER = "User"
    TEAM = "Team"

