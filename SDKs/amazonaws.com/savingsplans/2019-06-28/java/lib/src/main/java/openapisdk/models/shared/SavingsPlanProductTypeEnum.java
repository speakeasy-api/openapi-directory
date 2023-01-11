package openapisdk.models.shared;


public enum SavingsPlanProductTypeEnum {
    EC2("EC2"),
    FARGATE("Fargate"),
    LAMBDA("Lambda"),
    SAGE_MAKER("SageMaker");

    public final String value;

    private SavingsPlanProductTypeEnum(String value) {
        this.value = value;
    }
}
