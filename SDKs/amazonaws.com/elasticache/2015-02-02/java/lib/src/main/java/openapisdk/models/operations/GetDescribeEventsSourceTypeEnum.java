package openapisdk.models.operations;


public enum GetDescribeEventsSourceTypeEnum {
    CACHE_CLUSTER("cache-cluster"),
    CACHE_PARAMETER_GROUP("cache-parameter-group"),
    CACHE_SECURITY_GROUP("cache-security-group"),
    CACHE_SUBNET_GROUP("cache-subnet-group"),
    REPLICATION_GROUP("replication-group"),
    USER("user"),
    USER_GROUP("user-group");

    public final String value;

    private GetDescribeEventsSourceTypeEnum(String value) {
        this.value = value;
    }
}
