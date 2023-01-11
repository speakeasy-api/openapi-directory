package openapisdk.models.shared;


public enum MonitorErrorCodeEnum {
    INTERNAL_FAILURE("INTERNAL_FAILURE"),
    VALIDATION_ERROR("VALIDATION_ERROR"),
    LIMIT_EXCEEDED("LIMIT_EXCEEDED");

    public final String value;

    private MonitorErrorCodeEnum(String value) {
        this.value = value;
    }
}
