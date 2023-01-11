import dataclasses
from enum import Enum

class FirewallRuleGroupStatusEnum(str, Enum):
    COMPLETE = "COMPLETE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"

