package openapisdk.models.shared;


public enum ErrorCodeEnum {
    ACCESS_DENIED("AccessDenied"),
    INTERNAL_SERVER_ERROR("InternalServerError");

    public final String value;

    private ErrorCodeEnum(String value) {
        this.value = value;
    }
}
