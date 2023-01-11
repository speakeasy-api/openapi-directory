package openapisdk.models.operations;


public enum ListAuditTasksTaskTypeEnum {
    ON_DEMAND_AUDIT_TASK("ON_DEMAND_AUDIT_TASK"),
    SCHEDULED_AUDIT_TASK("SCHEDULED_AUDIT_TASK");

    public final String value;

    private ListAuditTasksTaskTypeEnum(String value) {
        this.value = value;
    }
}
