package openapisdk.models.shared;


public enum OperationStatusEnum {
    SUBMITTED("SUBMITTED"),
    IN_PROGRESS("IN_PROGRESS"),
    ERROR("ERROR"),
    SUCCESSFUL("SUCCESSFUL"),
    FAILED("FAILED");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
