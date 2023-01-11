package openapisdk.models.shared;


public enum CustomFieldSettingResponseCustomFieldTypeEnum {
    TEXT("text"),
    ENUM_("enum"),
    MULTI_ENUM("multi_enum"),
    NUMBER("number");

    public final String value;

    private CustomFieldSettingResponseCustomFieldTypeEnum(String value) {
        this.value = value;
    }
}
