package openapisdk.models.shared;


public enum DestinationSyncModeEnum {
    APPEND("append"),
    OVERWRITE("overwrite"),
    APPEND_DEDUP("append_dedup");

    public final String value;

    private DestinationSyncModeEnum(String value) {
        this.value = value;
    }
}
