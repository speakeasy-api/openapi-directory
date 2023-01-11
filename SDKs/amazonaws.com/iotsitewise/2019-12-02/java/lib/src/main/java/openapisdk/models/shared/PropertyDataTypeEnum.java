package openapisdk.models.shared;


public enum PropertyDataTypeEnum {
    STRING("STRING"),
    INTEGER("INTEGER"),
    DOUBLE("DOUBLE"),
    BOOLEAN_("BOOLEAN"),
    STRUCT("STRUCT");

    public final String value;

    private PropertyDataTypeEnum(String value) {
        this.value = value;
    }
}
