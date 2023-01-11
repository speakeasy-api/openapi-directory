import dataclasses
from enum import Enum

class ServerTypeEnum(str, Enum):
    GITHUB = "GITHUB"
    BITBUCKET = "BITBUCKET"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"

