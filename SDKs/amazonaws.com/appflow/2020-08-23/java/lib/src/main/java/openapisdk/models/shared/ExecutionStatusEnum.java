package openapisdk.models.shared;


public enum ExecutionStatusEnum {
    IN_PROGRESS("InProgress"),
    SUCCESSFUL("Successful"),
    ERROR("Error");

    public final String value;

    private ExecutionStatusEnum(String value) {
        this.value = value;
    }
}
