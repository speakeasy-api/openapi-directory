package openapisdk.models.shared;


public enum AttributeDataTypeEnum {
    STRING("String"),
    NUMBER("Number"),
    DATE_TIME("DateTime"),
    BOOLEAN_("Boolean");

    public final String value;

    private AttributeDataTypeEnum(String value) {
        this.value = value;
    }
}
