package openapisdk.models.shared;


public enum FailureTypeEnum {
    JOB_FAILED("JobFailed"),
    CONFIGURATION_ERROR("ConfigurationError"),
    PERMISSION_ERROR("PermissionError"),
    REVISION_OUT_OF_SYNC("RevisionOutOfSync"),
    REVISION_UNAVAILABLE("RevisionUnavailable"),
    SYSTEM_UNAVAILABLE("SystemUnavailable");

    public final String value;

    private FailureTypeEnum(String value) {
        this.value = value;
    }
}
