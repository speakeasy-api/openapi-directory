package openapisdk.models.shared;


public enum AuditTaskStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELED("CANCELED");

    public final String value;

    private AuditTaskStatusEnum(String value) {
        this.value = value;
    }
}
