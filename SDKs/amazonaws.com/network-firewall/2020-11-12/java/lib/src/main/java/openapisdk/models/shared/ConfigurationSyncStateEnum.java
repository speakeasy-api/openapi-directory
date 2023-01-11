package openapisdk.models.shared;


public enum ConfigurationSyncStateEnum {
    PENDING("PENDING"),
    IN_SYNC("IN_SYNC");

    public final String value;

    private ConfigurationSyncStateEnum(String value) {
        this.value = value;
    }
}
