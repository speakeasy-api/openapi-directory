package openapisdk.models.shared;


public enum CustomFieldResponseTypeEnum {
    TEXT("text"),
    ENUM_("enum"),
    MULTI_ENUM("multi_enum"),
    NUMBER("number");

    public final String value;

    private CustomFieldResponseTypeEnum(String value) {
        this.value = value;
    }
}
