package openapisdk.models.shared;


public enum ProtocolEnum {
    MQTT("MQTT"),
    HTTP("HTTP");

    public final String value;

    private ProtocolEnum(String value) {
        this.value = value;
    }
}
