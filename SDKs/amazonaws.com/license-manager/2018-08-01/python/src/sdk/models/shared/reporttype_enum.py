import dataclasses
from enum import Enum

class ReportTypeEnum(str, Enum):
    LICENSE_CONFIGURATION_SUMMARY_REPORT = "LicenseConfigurationSummaryReport"
    LICENSE_CONFIGURATION_USAGE_REPORT = "LicenseConfigurationUsageReport"

