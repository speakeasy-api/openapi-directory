package openapisdk.models.shared;


public enum CustomFieldCompactTypeEnum {
    TEXT("text"),
    ENUM_("enum"),
    MULTI_ENUM("multi_enum"),
    NUMBER("number");

    public final String value;

    private CustomFieldCompactTypeEnum(String value) {
        this.value = value;
    }
}
