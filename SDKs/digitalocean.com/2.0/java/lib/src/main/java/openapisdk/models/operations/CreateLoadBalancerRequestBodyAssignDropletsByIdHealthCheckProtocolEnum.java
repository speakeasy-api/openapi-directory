package openapisdk.models.operations;


public enum CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    HTTP("http"),
    HTTPS("https"),
    TCP("tcp");

    public final String value;

    private CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum(String value) {
        this.value = value;
    }
}
