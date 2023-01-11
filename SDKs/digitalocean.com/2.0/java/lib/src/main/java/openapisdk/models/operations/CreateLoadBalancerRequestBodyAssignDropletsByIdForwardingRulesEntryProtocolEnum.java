package openapisdk.models.operations;


public enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    HTTP2("http2"),
    TCP("tcp");

    public final String value;

    private CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum(String value) {
        this.value = value;
    }
}
