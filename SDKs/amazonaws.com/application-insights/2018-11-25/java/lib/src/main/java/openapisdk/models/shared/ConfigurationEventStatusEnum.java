package openapisdk.models.shared;


public enum ConfigurationEventStatusEnum {
    INFO("INFO"),
    WARN("WARN"),
    ERROR("ERROR");

    public final String value;

    private ConfigurationEventStatusEnum(String value) {
        this.value = value;
    }
}
