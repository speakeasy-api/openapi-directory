package openapisdk.models.shared;


public enum ErrorCodeEnum {
    INTERNAL_SERVICE_EXCEPTION("InternalServiceException"),
    INVALID_PARAMETER_EXCEPTION("InvalidParameterException");

    public final String value;

    private ErrorCodeEnum(String value) {
        this.value = value;
    }
}
