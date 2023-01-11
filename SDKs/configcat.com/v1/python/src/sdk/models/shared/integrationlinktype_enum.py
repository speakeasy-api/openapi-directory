import dataclasses
from enum import Enum

class IntegrationLinkTypeEnum(str, Enum):
    TRELLO = "trello"
    JIRA = "jira"

