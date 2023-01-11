package openapisdk.models.shared;


public enum SettingTypeEnum {
    BOOLEAN_("boolean"),
    STRING("string"),
    INT("int"),
    DOUBLE("double");

    public final String value;

    private SettingTypeEnum(String value) {
        this.value = value;
    }
}
