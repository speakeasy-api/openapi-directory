package openapisdk.models.operations;


public enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum(String value) {
        this.value = value;
    }
}
