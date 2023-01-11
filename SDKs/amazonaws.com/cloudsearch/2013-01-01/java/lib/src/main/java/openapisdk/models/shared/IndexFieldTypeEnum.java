package openapisdk.models.shared;


public enum IndexFieldTypeEnum {
    INT("int"),
    DOUBLE("double"),
    LITERAL("literal"),
    TEXT("text"),
    DATE("date"),
    LATLON("latlon"),
    INT_ARRAY("int-array"),
    DOUBLE_ARRAY("double-array"),
    LITERAL_ARRAY("literal-array"),
    TEXT_ARRAY("text-array"),
    DATE_ARRAY("date-array");

    public final String value;

    private IndexFieldTypeEnum(String value) {
        this.value = value;
    }
}
