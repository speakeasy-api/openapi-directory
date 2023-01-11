package openapisdk.models.shared;


public enum ReportTypeEnum {
    LICENSE_CONFIGURATION_SUMMARY_REPORT("LicenseConfigurationSummaryReport"),
    LICENSE_CONFIGURATION_USAGE_REPORT("LicenseConfigurationUsageReport");

    public final String value;

    private ReportTypeEnum(String value) {
        this.value = value;
    }
}
