package openapisdk.models.shared;


public enum WorkflowRunStatusEnum {
    RUNNING("RUNNING"),
    COMPLETED("COMPLETED"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    ERROR("ERROR");

    public final String value;

    private WorkflowRunStatusEnum(String value) {
        this.value = value;
    }
}
