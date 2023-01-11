package openapisdk.models.shared;


public enum WorldExportJobErrorCodeEnum {
    INTERNAL_SERVICE_ERROR("InternalServiceError"),
    LIMIT_EXCEEDED("LimitExceeded"),
    RESOURCE_NOT_FOUND("ResourceNotFound"),
    REQUEST_THROTTLED("RequestThrottled"),
    INVALID_INPUT("InvalidInput"),
    ACCESS_DENIED("AccessDenied");

    public final String value;

    private WorldExportJobErrorCodeEnum(String value) {
        this.value = value;
    }
}
