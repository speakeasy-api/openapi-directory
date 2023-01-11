package openapisdk.models.operations;


public enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum(String value) {
        this.value = value;
    }
}
