package openapisdk.models.shared;


public enum EventClassEnum {
    INFRASTRUCTURE("INFRASTRUCTURE"),
    DEPLOYMENT("DEPLOYMENT"),
    SECURITY_CHANGE("SECURITY_CHANGE"),
    CONFIG_CHANGE("CONFIG_CHANGE"),
    SCHEMA_CHANGE("SCHEMA_CHANGE");

    public final String value;

    private EventClassEnum(String value) {
        this.value = value;
    }
}
