package openapisdk.models.shared;


public enum SavingsPlansFilterNameEnum {
    REGION("region"),
    EC2_INSTANCE_FAMILY("ec2-instance-family"),
    COMMITMENT("commitment"),
    UPFRONT("upfront"),
    TERM("term"),
    SAVINGS_PLAN_TYPE("savings-plan-type"),
    PAYMENT_OPTION("payment-option"),
    START("start"),
    END("end");

    public final String value;

    private SavingsPlansFilterNameEnum(String value) {
        this.value = value;
    }
}
