package openapisdk.models.shared;


public enum ConformancePackComplianceTypeEnum {
    COMPLIANT("COMPLIANT"),
    NON_COMPLIANT("NON_COMPLIANT"),
    INSUFFICIENT_DATA("INSUFFICIENT_DATA");

    public final String value;

    private ConformancePackComplianceTypeEnum(String value) {
        this.value = value;
    }
}
