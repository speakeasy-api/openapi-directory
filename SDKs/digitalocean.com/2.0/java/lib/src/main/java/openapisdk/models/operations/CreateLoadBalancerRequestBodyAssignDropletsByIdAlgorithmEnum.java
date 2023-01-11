package openapisdk.models.operations;


public enum CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    ROUND_ROBIN("round_robin"),
    LEAST_CONNECTIONS("least_connections");

    public final String value;

    private CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum(String value) {
        this.value = value;
    }
}
