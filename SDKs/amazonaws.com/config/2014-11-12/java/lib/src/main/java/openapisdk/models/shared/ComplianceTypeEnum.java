package openapisdk.models.shared;


public enum ComplianceTypeEnum {
    COMPLIANT("COMPLIANT"),
    NON_COMPLIANT("NON_COMPLIANT"),
    NOT_APPLICABLE("NOT_APPLICABLE"),
    INSUFFICIENT_DATA("INSUFFICIENT_DATA");

    public final String value;

    private ComplianceTypeEnum(String value) {
        this.value = value;
    }
}
