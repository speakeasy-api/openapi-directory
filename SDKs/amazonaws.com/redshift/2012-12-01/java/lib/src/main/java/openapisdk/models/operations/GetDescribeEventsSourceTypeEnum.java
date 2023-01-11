package openapisdk.models.operations;


public enum GetDescribeEventsSourceTypeEnum {
    CLUSTER("cluster"),
    CLUSTER_PARAMETER_GROUP("cluster-parameter-group"),
    CLUSTER_SECURITY_GROUP("cluster-security-group"),
    CLUSTER_SNAPSHOT("cluster-snapshot"),
    SCHEDULED_ACTION("scheduled-action");

    public final String value;

    private GetDescribeEventsSourceTypeEnum(String value) {
        this.value = value;
    }
}
