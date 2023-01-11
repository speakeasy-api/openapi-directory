package openapisdk.models.operations;


public enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum(String value) {
        this.value = value;
    }
}
