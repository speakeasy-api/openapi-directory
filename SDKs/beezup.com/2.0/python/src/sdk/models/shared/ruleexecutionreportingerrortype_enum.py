import dataclasses
from enum import Enum

class RuleExecutionReportingErrorTypeEnum(str, Enum):
    CHANNEL_NOT_PRESENT = "ChannelNotPresent"
    STORE_IS_IN_SYSTEM_BLOCK_STATE = "StoreIsInSystemBlockState"

