package openapisdk.models.shared;


public enum RecommendationSourceTypeEnum {
    EC2_INSTANCE("Ec2Instance"),
    AUTO_SCALING_GROUP("AutoScalingGroup"),
    EBS_VOLUME("EbsVolume"),
    LAMBDA_FUNCTION("LambdaFunction");

    public final String value;

    private RecommendationSourceTypeEnum(String value) {
        this.value = value;
    }
}
