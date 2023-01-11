package openapisdk.models.shared;


public enum ServiceNamespaceEnum {
    AUTOSCALING("autoscaling"),
    ECS("ecs"),
    EC2("ec2"),
    RDS("rds"),
    DYNAMODB("dynamodb");

    public final String value;

    private ServiceNamespaceEnum(String value) {
        this.value = value;
    }
}
