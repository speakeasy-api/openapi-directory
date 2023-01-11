package openapisdk.models.shared;


public enum SavingsPlanRateServiceCodeEnum {
    AMAZON_EC2("AmazonEC2"),
    AMAZON_ECS("AmazonECS"),
    AMAZON_EKS("AmazonEKS"),
    AWS_LAMBDA("AWSLambda"),
    AMAZON_SAGE_MAKER("AmazonSageMaker");

    public final String value;

    private SavingsPlanRateServiceCodeEnum(String value) {
        this.value = value;
    }
}
