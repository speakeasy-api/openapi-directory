package openapisdk.models.shared;


public enum HttpEndpointS3BackupModeEnum {
    FAILED_DATA_ONLY("FailedDataOnly"),
    ALL_DATA("AllData");

    public final String value;

    private HttpEndpointS3BackupModeEnum(String value) {
        this.value = value;
    }
}
