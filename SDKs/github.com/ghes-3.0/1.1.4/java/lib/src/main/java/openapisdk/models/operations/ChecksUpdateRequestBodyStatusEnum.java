package openapisdk.models.operations;


public enum ChecksUpdateRequestBodyStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed");

    public final String value;

    private ChecksUpdateRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}
