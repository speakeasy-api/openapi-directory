package openapisdk.models.shared;


public enum LoggerTypeEnum {
    FILE_SYSTEM("FileSystem"),
    AWS_CLOUD_WATCH("AWSCloudWatch");

    public final String value;

    private LoggerTypeEnum(String value) {
        this.value = value;
    }
}
