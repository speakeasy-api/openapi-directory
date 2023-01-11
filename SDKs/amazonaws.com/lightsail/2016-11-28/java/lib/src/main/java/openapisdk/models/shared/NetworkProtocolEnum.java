package openapisdk.models.shared;


public enum NetworkProtocolEnum {
    TCP("tcp"),
    ALL("all"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private NetworkProtocolEnum(String value) {
        this.value = value;
    }
}
