import dataclasses
from enum import Enum

class NotificationTypeEnum(str, Enum):
    LENS_VERSION_UPGRADED = "LENS_VERSION_UPGRADED"
    LENS_VERSION_DEPRECATED = "LENS_VERSION_DEPRECATED"

