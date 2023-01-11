package openapisdk.models.shared;


public enum InventoryFilterConditionEnum {
    EQUALS("EQUALS"),
    NOT_EQUALS("NOT_EQUALS"),
    BEGINS_WITH("BEGINS_WITH"),
    CONTAINS("CONTAINS");

    public final String value;

    private InventoryFilterConditionEnum(String value) {
        this.value = value;
    }
}
