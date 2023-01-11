package openapisdk.models.operations;


public enum ListAuditMitigationActionsTasksTaskStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELED("CANCELED");

    public final String value;

    private ListAuditMitigationActionsTasksTaskStatusEnum(String value) {
        this.value = value;
    }
}
