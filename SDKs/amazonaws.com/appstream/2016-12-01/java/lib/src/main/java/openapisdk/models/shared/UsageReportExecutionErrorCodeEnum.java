package openapisdk.models.shared;


public enum UsageReportExecutionErrorCodeEnum {
    RESOURCE_NOT_FOUND("RESOURCE_NOT_FOUND"),
    ACCESS_DENIED("ACCESS_DENIED"),
    INTERNAL_SERVICE_ERROR("INTERNAL_SERVICE_ERROR");

    public final String value;

    private UsageReportExecutionErrorCodeEnum(String value) {
        this.value = value;
    }
}
