package openapisdk.models.shared;


public enum ClientAffinityEnum {
    NONE("NONE"),
    SOURCE_IP("SOURCE_IP");

    public final String value;

    private ClientAffinityEnum(String value) {
        this.value = value;
    }
}
