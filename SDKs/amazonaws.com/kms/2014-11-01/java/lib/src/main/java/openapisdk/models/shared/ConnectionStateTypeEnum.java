package openapisdk.models.shared;


public enum ConnectionStateTypeEnum {
    CONNECTED("CONNECTED"),
    CONNECTING("CONNECTING"),
    FAILED("FAILED"),
    DISCONNECTED("DISCONNECTED"),
    DISCONNECTING("DISCONNECTING");

    public final String value;

    private ConnectionStateTypeEnum(String value) {
        this.value = value;
    }
}
