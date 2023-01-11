package openapisdk.models.operations;


public enum ListAuditTasksTaskStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELED("CANCELED");

    public final String value;

    private ListAuditTasksTaskStatusEnum(String value) {
        this.value = value;
    }
}
