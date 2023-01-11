package openapisdk.models.operations;


public enum PostExternalEventsRequestBodyStatusEnum {
    SUCCESS("success"),
    ERROR("error"),
    PARTIAL_FAILURE("partial_failure");

    public final String value;

    private PostExternalEventsRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}
