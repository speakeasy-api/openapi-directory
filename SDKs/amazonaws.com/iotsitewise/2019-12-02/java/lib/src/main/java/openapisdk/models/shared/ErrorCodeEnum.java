package openapisdk.models.shared;


public enum ErrorCodeEnum {
    VALIDATION_ERROR("VALIDATION_ERROR"),
    INTERNAL_FAILURE("INTERNAL_FAILURE");

    public final String value;

    private ErrorCodeEnum(String value) {
        this.value = value;
    }
}
