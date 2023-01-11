package openapisdk.models.shared;


public enum AquaConfigurationStatusEnum {
    ENABLED("enabled"),
    DISABLED("disabled"),
    AUTO("auto");

    public final String value;

    private AquaConfigurationStatusEnum(String value) {
        this.value = value;
    }
}
