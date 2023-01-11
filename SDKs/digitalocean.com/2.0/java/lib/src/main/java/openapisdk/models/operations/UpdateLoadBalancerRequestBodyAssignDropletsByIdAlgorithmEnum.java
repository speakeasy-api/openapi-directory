package openapisdk.models.operations;


public enum UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    ROUND_ROBIN("round_robin"),
    LEAST_CONNECTIONS("least_connections");

    public final String value;

    private UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum(String value) {
        this.value = value;
    }
}
