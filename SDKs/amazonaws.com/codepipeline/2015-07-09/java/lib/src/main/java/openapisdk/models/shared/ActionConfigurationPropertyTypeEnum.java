package openapisdk.models.shared;


public enum ActionConfigurationPropertyTypeEnum {
    STRING("String"),
    NUMBER("Number"),
    BOOLEAN_("Boolean");

    public final String value;

    private ActionConfigurationPropertyTypeEnum(String value) {
        this.value = value;
    }
}
