package openapisdk.models.shared;


public enum BudgetTypeEnum {
    USAGE("USAGE"),
    COST("COST"),
    RI_UTILIZATION("RI_UTILIZATION"),
    RI_COVERAGE("RI_COVERAGE"),
    SAVINGS_PLANS_UTILIZATION("SAVINGS_PLANS_UTILIZATION"),
    SAVINGS_PLANS_COVERAGE("SAVINGS_PLANS_COVERAGE");

    public final String value;

    private BudgetTypeEnum(String value) {
        this.value = value;
    }
}
