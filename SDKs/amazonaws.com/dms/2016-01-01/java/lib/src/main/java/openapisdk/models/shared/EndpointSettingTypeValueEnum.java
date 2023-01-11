package openapisdk.models.shared;


public enum EndpointSettingTypeValueEnum {
    STRING("string"),
    BOOLEAN_("boolean"),
    INTEGER("integer"),
    ENUM_("enum");

    public final String value;

    private EndpointSettingTypeValueEnum(String value) {
        this.value = value;
    }
}
