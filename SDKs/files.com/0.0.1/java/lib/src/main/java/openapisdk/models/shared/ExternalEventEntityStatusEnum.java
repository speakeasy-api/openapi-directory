package openapisdk.models.shared;


public enum ExternalEventEntityStatusEnum {
    SUCCESS("success"),
    ERROR("error"),
    PARTIAL_FAILURE("partial_failure");

    public final String value;

    private ExternalEventEntityStatusEnum(String value) {
        this.value = value;
    }
}
