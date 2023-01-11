package openapisdk.models.operations;


public enum CreateFirewallRequestBodyInboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private CreateFirewallRequestBodyInboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
