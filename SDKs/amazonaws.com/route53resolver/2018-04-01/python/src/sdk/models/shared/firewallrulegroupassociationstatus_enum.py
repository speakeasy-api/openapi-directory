import dataclasses
from enum import Enum

class FirewallRuleGroupAssociationStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

