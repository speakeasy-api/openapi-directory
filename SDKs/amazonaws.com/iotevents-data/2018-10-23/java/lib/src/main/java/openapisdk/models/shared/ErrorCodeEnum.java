package openapisdk.models.shared;


public enum ErrorCodeEnum {
    RESOURCE_NOT_FOUND_EXCEPTION("ResourceNotFoundException"),
    INVALID_REQUEST_EXCEPTION("InvalidRequestException"),
    INTERNAL_FAILURE_EXCEPTION("InternalFailureException"),
    SERVICE_UNAVAILABLE_EXCEPTION("ServiceUnavailableException"),
    THROTTLING_EXCEPTION("ThrottlingException");

    public final String value;

    private ErrorCodeEnum(String value) {
        this.value = value;
    }
}
