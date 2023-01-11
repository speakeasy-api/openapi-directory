package openapisdk.models.shared;


public enum AuditMitigationActionsTaskStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELED("CANCELED");

    public final String value;

    private AuditMitigationActionsTaskStatusEnum(String value) {
        this.value = value;
    }
}
