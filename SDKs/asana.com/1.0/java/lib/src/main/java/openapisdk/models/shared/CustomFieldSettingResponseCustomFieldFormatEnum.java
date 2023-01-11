package openapisdk.models.shared;


public enum CustomFieldSettingResponseCustomFieldFormatEnum {
    CURRENCY("currency"),
    IDENTIFIER("identifier"),
    PERCENTAGE("percentage"),
    CUSTOM("custom"),
    NONE("none");

    public final String value;

    private CustomFieldSettingResponseCustomFieldFormatEnum(String value) {
        this.value = value;
    }
}
