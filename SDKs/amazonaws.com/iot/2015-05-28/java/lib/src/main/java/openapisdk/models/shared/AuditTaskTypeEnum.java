package openapisdk.models.shared;


public enum AuditTaskTypeEnum {
    ON_DEMAND_AUDIT_TASK("ON_DEMAND_AUDIT_TASK"),
    SCHEDULED_AUDIT_TASK("SCHEDULED_AUDIT_TASK");

    public final String value;

    private AuditTaskTypeEnum(String value) {
        this.value = value;
    }
}
