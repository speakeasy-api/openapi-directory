package openapisdk.models.shared;


public enum ExecutionTypeEnum {
    APPROVE_BUDGET_ACTION("APPROVE_BUDGET_ACTION"),
    RETRY_BUDGET_ACTION("RETRY_BUDGET_ACTION"),
    REVERSE_BUDGET_ACTION("REVERSE_BUDGET_ACTION"),
    RESET_BUDGET_ACTION("RESET_BUDGET_ACTION");

    public final String value;

    private ExecutionTypeEnum(String value) {
        this.value = value;
    }
}
