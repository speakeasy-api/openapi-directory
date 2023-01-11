package openapisdk.models.shared;


public enum ShardFilterTypeEnum {
    AFTER_SHARD_ID("AFTER_SHARD_ID"),
    AT_TRIM_HORIZON("AT_TRIM_HORIZON"),
    FROM_TRIM_HORIZON("FROM_TRIM_HORIZON"),
    AT_LATEST("AT_LATEST"),
    AT_TIMESTAMP("AT_TIMESTAMP"),
    FROM_TIMESTAMP("FROM_TIMESTAMP");

    public final String value;

    private ShardFilterTypeEnum(String value) {
        this.value = value;
    }
}
