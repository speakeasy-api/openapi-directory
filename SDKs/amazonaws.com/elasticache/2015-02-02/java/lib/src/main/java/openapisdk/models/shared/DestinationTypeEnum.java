package openapisdk.models.shared;


public enum DestinationTypeEnum {
    CLOUDWATCH_LOGS("cloudwatch-logs"),
    KINESIS_FIREHOSE("kinesis-firehose");

    public final String value;

    private DestinationTypeEnum(String value) {
        this.value = value;
    }
}
