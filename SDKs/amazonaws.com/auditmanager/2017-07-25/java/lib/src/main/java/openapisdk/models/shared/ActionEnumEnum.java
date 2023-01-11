package openapisdk.models.shared;


public enum ActionEnumEnum {
    CREATE("CREATE"),
    UPDATE_METADATA("UPDATE_METADATA"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETE("DELETE"),
    UNDER_REVIEW("UNDER_REVIEW"),
    REVIEWED("REVIEWED"),
    IMPORT_EVIDENCE("IMPORT_EVIDENCE");

    public final String value;

    private ActionEnumEnum(String value) {
        this.value = value;
    }
}
