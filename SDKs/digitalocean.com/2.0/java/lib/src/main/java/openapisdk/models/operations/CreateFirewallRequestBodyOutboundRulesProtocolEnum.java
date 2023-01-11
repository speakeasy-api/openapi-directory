package openapisdk.models.operations;


public enum CreateFirewallRequestBodyOutboundRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp");

    public final String value;

    private CreateFirewallRequestBodyOutboundRulesProtocolEnum(String value) {
        this.value = value;
    }
}
