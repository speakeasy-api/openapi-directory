package openapisdk.models.shared;


public enum WorkflowStateEnum {
    ACTIVE("active"),
    DELETED("deleted");

    public final String value;

    private WorkflowStateEnum(String value) {
        this.value = value;
    }
}
