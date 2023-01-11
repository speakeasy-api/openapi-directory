package openapisdk.models.operations;


public enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum(String value) {
        this.value = value;
    }
}
