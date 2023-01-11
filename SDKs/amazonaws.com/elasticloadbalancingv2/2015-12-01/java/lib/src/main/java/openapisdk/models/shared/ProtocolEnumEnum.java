package openapisdk.models.shared;


public enum ProtocolEnumEnum {
    HTTP("HTTP"),
    HTTPS("HTTPS"),
    TCP("TCP"),
    TLS("TLS"),
    UDP("UDP"),
    TCP_UDP("TCP_UDP"),
    GENEVE("GENEVE");

    public final String value;

    private ProtocolEnumEnum(String value) {
        this.value = value;
    }
}
