package openapisdk.models.operations;


public enum UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    TCP("tcp");

    public final String value;

    private UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum(String value) {
        this.value = value;
    }
}
