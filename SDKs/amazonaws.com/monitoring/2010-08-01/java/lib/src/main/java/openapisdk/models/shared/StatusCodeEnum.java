package openapisdk.models.shared;


public enum StatusCodeEnum {
    COMPLETE("Complete"),
    INTERNAL_ERROR("InternalError"),
    PARTIAL_DATA("PartialData");

    public final String value;

    private StatusCodeEnum(String value) {
        this.value = value;
    }
}
