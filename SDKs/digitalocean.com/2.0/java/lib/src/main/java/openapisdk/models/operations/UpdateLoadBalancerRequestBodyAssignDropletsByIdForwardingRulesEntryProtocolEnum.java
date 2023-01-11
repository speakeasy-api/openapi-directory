package openapisdk.models.operations;


public enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum(String value) {
        this.value = value;
    }
}
