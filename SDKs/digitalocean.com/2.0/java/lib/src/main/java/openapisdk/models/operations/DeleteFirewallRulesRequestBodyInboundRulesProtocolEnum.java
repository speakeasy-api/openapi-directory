package openapisdk.models.operations;


public enum DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
