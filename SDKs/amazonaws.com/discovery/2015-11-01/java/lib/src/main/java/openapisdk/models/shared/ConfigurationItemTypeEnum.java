package openapisdk.models.shared;


public enum ConfigurationItemTypeEnum {
    SERVER("SERVER"),
    PROCESS("PROCESS"),
    CONNECTION("CONNECTION"),
    APPLICATION("APPLICATION");

    public final String value;

    private ConfigurationItemTypeEnum(String value) {
        this.value = value;
    }
}
