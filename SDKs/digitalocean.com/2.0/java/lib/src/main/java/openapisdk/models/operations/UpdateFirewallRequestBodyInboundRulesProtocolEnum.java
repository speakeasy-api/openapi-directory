package openapisdk.models.operations;


public enum UpdateFirewallRequestBodyInboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private UpdateFirewallRequestBodyInboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
