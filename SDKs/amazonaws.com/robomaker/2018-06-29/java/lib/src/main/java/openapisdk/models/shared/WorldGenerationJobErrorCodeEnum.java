package openapisdk.models.shared;


public enum WorldGenerationJobErrorCodeEnum {
    INTERNAL_SERVICE_ERROR("InternalServiceError"),
    LIMIT_EXCEEDED("LimitExceeded"),
    RESOURCE_NOT_FOUND("ResourceNotFound"),
    REQUEST_THROTTLED("RequestThrottled"),
    INVALID_INPUT("InvalidInput"),
    ALL_WORLD_GENERATION_FAILED("AllWorldGenerationFailed");

    public final String value;

    private WorldGenerationJobErrorCodeEnum(String value) {
        this.value = value;
    }
}
