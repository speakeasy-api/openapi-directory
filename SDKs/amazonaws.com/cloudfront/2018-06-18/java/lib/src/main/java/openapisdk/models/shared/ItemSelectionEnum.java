package openapisdk.models.shared;


public enum ItemSelectionEnum {
    NONE("none"),
    WHITELIST("whitelist"),
    ALL("all");

    public final String value;

    private ItemSelectionEnum(String value) {
        this.value = value;
    }
}
