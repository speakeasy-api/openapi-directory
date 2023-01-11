package openapisdk.models.shared;


public enum LogDestinationTypeEnum {
    S3("S3"),
    CLOUD_WATCH_LOGS("CloudWatchLogs"),
    KINESIS_DATA_FIREHOSE("KinesisDataFirehose");

    public final String value;

    private LogDestinationTypeEnum(String value) {
        this.value = value;
    }
}
