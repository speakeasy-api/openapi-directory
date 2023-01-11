package openapisdk.models.shared;


public enum BlockTypeEnum {
    KEY_VALUE_SET("KEY_VALUE_SET"),
    PAGE("PAGE"),
    LINE("LINE"),
    WORD("WORD"),
    TABLE("TABLE"),
    CELL("CELL"),
    SELECTION_ELEMENT("SELECTION_ELEMENT");

    public final String value;

    private BlockTypeEnum(String value) {
        this.value = value;
    }
}
