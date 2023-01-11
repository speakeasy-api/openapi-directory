import dataclasses
from enum import Enum

class UsernameEnum(str, Enum):
    ORGANIZATION = "organization"
    REPOSITORY = "repository"
    ISSUE = "issue"
    PULL_REQUEST = "pull_request"

