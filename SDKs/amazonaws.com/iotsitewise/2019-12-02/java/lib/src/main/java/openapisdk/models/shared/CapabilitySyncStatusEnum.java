package openapisdk.models.shared;


public enum CapabilitySyncStatusEnum {
    IN_SYNC("IN_SYNC"),
    OUT_OF_SYNC("OUT_OF_SYNC"),
    SYNC_FAILED("SYNC_FAILED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private CapabilitySyncStatusEnum(String value) {
        this.value = value;
    }
}
