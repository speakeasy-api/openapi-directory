package openapisdk.models.shared;


public enum SavingsPlanTypeEnum {
    COMPUTE("Compute"),
    EC2_INSTANCE("EC2Instance"),
    SAGE_MAKER("SageMaker");

    public final String value;

    private SavingsPlanTypeEnum(String value) {
        this.value = value;
    }
}
