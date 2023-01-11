package openapisdk.models.shared;


public enum WorkflowStateEnum {
    NEW_("NEW"),
    ASSIGNED("ASSIGNED"),
    IN_PROGRESS("IN_PROGRESS"),
    DEFERRED("DEFERRED"),
    RESOLVED("RESOLVED");

    public final String value;

    private WorkflowStateEnum(String value) {
        this.value = value;
    }
}
