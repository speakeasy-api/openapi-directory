package openapisdk.models.operations;


public enum CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum {
    ROUND_ROBIN("round_robin"),
    LEAST_CONNECTIONS("least_connections");

    public final String value;

    private CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum(String value) {
        this.value = value;
    }
}
