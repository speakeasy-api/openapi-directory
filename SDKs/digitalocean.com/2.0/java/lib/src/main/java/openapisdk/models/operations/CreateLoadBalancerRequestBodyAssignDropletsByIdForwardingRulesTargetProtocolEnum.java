package openapisdk.models.operations;


public enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum(String value) {
        this.value = value;
    }
}
