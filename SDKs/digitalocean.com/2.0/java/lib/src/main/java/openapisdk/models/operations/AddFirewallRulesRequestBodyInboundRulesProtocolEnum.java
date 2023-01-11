package openapisdk.models.operations;


public enum AddFirewallRulesRequestBodyInboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private AddFirewallRulesRequestBodyInboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
