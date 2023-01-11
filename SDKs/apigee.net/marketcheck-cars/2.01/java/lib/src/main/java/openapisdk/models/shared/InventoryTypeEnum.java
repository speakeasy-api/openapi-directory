package openapisdk.models.shared;


public enum InventoryTypeEnum {
    USED("used"),
    NEW_("new");

    public final String value;

    private InventoryTypeEnum(String value) {
        this.value = value;
    }
}
