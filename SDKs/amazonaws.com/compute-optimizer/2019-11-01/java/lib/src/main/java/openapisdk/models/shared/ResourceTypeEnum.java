package openapisdk.models.shared;


public enum ResourceTypeEnum {
    EC2_INSTANCE("Ec2Instance"),
    AUTO_SCALING_GROUP("AutoScalingGroup"),
    EBS_VOLUME("EbsVolume"),
    LAMBDA_FUNCTION("LambdaFunction");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
