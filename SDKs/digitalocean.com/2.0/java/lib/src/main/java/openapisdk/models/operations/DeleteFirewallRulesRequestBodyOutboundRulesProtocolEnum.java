package openapisdk.models.operations;


public enum DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
