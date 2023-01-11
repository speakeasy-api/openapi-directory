package openapisdk.models.shared;


public enum ErrorCodeEnum {
    CLIENT_ERROR("ClientError"),
    INTERNAL_ERROR("InternalError");

    public final String value;

    private ErrorCodeEnum(String value) {
        this.value = value;
    }
}
