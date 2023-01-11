import dataclasses
from enum import Enum

class ReportFilterPeriodTypeEnum(str, Enum):
    CUSTOM = "Custom"
    YESTERDAY = "Yesterday"
    LAST7_DAYS = "Last7Days"
    LAST_WEEK = "LastWeek"
    THIS_MONTH = "ThisMonth"
    LAST30_DAYS = "Last30Days"
    LAST_MONTH = "LastMonth"
    LAST60_DAYS = "Last60Days"
    LAST90_DAYS = "Last90Days"
    LAST3_MONTHS = "Last3Months"

