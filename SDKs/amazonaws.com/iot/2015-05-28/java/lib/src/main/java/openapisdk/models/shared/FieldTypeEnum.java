package openapisdk.models.shared;


public enum FieldTypeEnum {
    NUMBER("Number"),
    STRING("String"),
    BOOLEAN_("Boolean");

    public final String value;

    private FieldTypeEnum(String value) {
        this.value = value;
    }
}
