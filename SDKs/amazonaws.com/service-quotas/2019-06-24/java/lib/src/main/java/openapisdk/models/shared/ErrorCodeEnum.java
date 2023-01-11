package openapisdk.models.shared;


public enum ErrorCodeEnum {
    DEPENDENCY_ACCESS_DENIED_ERROR("DEPENDENCY_ACCESS_DENIED_ERROR"),
    DEPENDENCY_THROTTLING_ERROR("DEPENDENCY_THROTTLING_ERROR"),
    DEPENDENCY_SERVICE_ERROR("DEPENDENCY_SERVICE_ERROR"),
    SERVICE_QUOTA_NOT_AVAILABLE_ERROR("SERVICE_QUOTA_NOT_AVAILABLE_ERROR");

    public final String value;

    private ErrorCodeEnum(String value) {
        this.value = value;
    }
}
