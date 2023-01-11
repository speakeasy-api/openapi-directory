package openapisdk.models.shared;


public enum ConfigurationOptionValueTypeEnum {
    SCALAR("Scalar"),
    LIST("List");

    public final String value;

    private ConfigurationOptionValueTypeEnum(String value) {
        this.value = value;
    }
}
