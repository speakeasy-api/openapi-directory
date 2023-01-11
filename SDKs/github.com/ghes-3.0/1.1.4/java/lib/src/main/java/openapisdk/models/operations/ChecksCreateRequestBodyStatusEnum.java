package openapisdk.models.operations;


public enum ChecksCreateRequestBodyStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed");

    public final String value;

    private ChecksCreateRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}
