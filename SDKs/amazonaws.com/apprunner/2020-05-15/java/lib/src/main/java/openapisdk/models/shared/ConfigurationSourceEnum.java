package openapisdk.models.shared;


public enum ConfigurationSourceEnum {
    REPOSITORY("REPOSITORY"),
    API("API");

    public final String value;

    private ConfigurationSourceEnum(String value) {
        this.value = value;
    }
}
