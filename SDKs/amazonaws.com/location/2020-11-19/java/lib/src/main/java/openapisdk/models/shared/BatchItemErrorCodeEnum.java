package openapisdk.models.shared;


public enum BatchItemErrorCodeEnum {
    ACCESS_DENIED_ERROR("AccessDeniedError"),
    CONFLICT_ERROR("ConflictError"),
    INTERNAL_SERVER_ERROR("InternalServerError"),
    RESOURCE_NOT_FOUND_ERROR("ResourceNotFoundError"),
    THROTTLING_ERROR("ThrottlingError"),
    VALIDATION_ERROR("ValidationError");

    public final String value;

    private BatchItemErrorCodeEnum(String value) {
        this.value = value;
    }
}
