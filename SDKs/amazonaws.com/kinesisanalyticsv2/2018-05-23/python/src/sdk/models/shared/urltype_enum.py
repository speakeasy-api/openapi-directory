import dataclasses
from enum import Enum

class URLTypeEnum(str, Enum):
    FLINK_DASHBOARD_URL = "FLINK_DASHBOARD_URL"
    ZEPPELIN_UI_URL = "ZEPPELIN_UI_URL"

