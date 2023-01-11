package openapisdk.models.shared;


public enum JobErrorCodeEnum {
    AUTHORIZATION_ERROR("AUTHORIZATION_ERROR"),
    RESOURCE_NOT_FOUND_ERROR("RESOURCE_NOT_FOUND_ERROR"),
    SERVICE_QUOTA_EXCEEDED_ERROR("SERVICE_QUOTA_EXCEEDED_ERROR"),
    SERVICE_ERROR("SERVICE_ERROR");

    public final String value;

    private JobErrorCodeEnum(String value) {
        this.value = value;
    }
}
