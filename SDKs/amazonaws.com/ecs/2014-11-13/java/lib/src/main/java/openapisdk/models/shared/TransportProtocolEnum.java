package openapisdk.models.shared;


public enum TransportProtocolEnum {
    TCP("tcp"),
    UDP("udp");

    public final String value;

    private TransportProtocolEnum(String value) {
        this.value = value;
    }
}
