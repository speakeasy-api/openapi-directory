package openapisdk.models.shared;


public enum ShardIteratorTypeEnum {
    AT_SEQUENCE_NUMBER("AT_SEQUENCE_NUMBER"),
    AFTER_SEQUENCE_NUMBER("AFTER_SEQUENCE_NUMBER"),
    TRIM_HORIZON("TRIM_HORIZON"),
    LATEST("LATEST"),
    AT_TIMESTAMP("AT_TIMESTAMP");

    public final String value;

    private ShardIteratorTypeEnum(String value) {
        this.value = value;
    }
}
