package openapisdk.models.operations;


public enum DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum {
    EC2("EC2"),
    FARGATE("Fargate"),
    LAMBDA("Lambda"),
    SAGE_MAKER("SageMaker");

    public final String value;

    private DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum(String value) {
        this.value = value;
    }
}
