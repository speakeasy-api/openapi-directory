package openapisdk.models.shared;


public enum ServiceNamespaceEnum {
    ECS("ecs"),
    ELASTICMAPREDUCE("elasticmapreduce"),
    EC2("ec2"),
    APPSTREAM("appstream"),
    DYNAMODB("dynamodb"),
    RDS("rds"),
    SAGEMAKER("sagemaker"),
    CUSTOM_RESOURCE("custom-resource"),
    COMPREHEND("comprehend"),
    LAMBDA("lambda"),
    CASSANDRA("cassandra"),
    KAFKA("kafka"),
    ELASTICACHE("elasticache");

    public final String value;

    private ServiceNamespaceEnum(String value) {
        this.value = value;
    }
}
