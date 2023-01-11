package openapisdk.models.operations;


public enum AddFirewallRulesRequestBodyOutboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private AddFirewallRulesRequestBodyOutboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
