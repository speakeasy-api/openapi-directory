package openapisdk.models.shared;


public enum SyncModeEnum {
    FULL_REFRESH("full_refresh"),
    INCREMENTAL("incremental");

    public final String value;

    private SyncModeEnum(String value) {
        this.value = value;
    }
}
