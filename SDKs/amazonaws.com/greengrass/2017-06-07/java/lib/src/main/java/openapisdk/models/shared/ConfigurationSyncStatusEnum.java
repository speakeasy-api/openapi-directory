package openapisdk.models.shared;


public enum ConfigurationSyncStatusEnum {
    IN_SYNC("InSync"),
    OUT_OF_SYNC("OutOfSync");

    public final String value;

    private ConfigurationSyncStatusEnum(String value) {
        this.value = value;
    }
}
