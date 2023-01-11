package openapisdk.models.shared;


public enum ActionCodeEnum {
    ARCHIVE_RETRIEVAL("ArchiveRetrieval"),
    INVENTORY_RETRIEVAL("InventoryRetrieval"),
    SELECT("Select");

    public final String value;

    private ActionCodeEnum(String value) {
        this.value = value;
    }
}
