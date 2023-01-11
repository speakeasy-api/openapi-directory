package openapisdk.models.shared;


public enum PerObjectSyncStatusEnum {
    PENDING("PENDING"),
    IN_SYNC("IN_SYNC");

    public final String value;

    private PerObjectSyncStatusEnum(String value) {
        this.value = value;
    }
}
