package openapisdk.models.operations;


public enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum(String value) {
        this.value = value;
    }
}
