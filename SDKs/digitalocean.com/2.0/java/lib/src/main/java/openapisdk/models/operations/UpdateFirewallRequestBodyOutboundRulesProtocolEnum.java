package openapisdk.models.operations;


public enum UpdateFirewallRequestBodyOutboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private UpdateFirewallRequestBodyOutboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
