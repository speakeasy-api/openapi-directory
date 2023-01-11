package openapisdk.models.shared;


public enum ComplianceStatusEnum {
    PASSED("PASSED"),
    WARNING("WARNING"),
    FAILED("FAILED"),
    NOT_AVAILABLE("NOT_AVAILABLE");

    public final String value;

    private ComplianceStatusEnum(String value) {
        this.value = value;
    }
}
