package openapisdk.models.shared;


public enum AuditMitigationActionsExecutionStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELED("CANCELED"),
    SKIPPED("SKIPPED"),
    PENDING("PENDING");

    public final String value;

    private AuditMitigationActionsExecutionStatusEnum(String value) {
        this.value = value;
    }
}
