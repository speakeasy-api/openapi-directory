package openapisdk.models.shared;


public enum PipelineExecutionStatusEnum {
    CANCELLED("Cancelled"),
    IN_PROGRESS("InProgress"),
    STOPPED("Stopped"),
    STOPPING("Stopping"),
    SUCCEEDED("Succeeded"),
    SUPERSEDED("Superseded"),
    FAILED("Failed");

    public final String value;

    private PipelineExecutionStatusEnum(String value) {
        this.value = value;
    }
}
