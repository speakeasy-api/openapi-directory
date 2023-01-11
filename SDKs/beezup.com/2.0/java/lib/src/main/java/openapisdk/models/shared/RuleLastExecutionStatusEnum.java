package openapisdk.models.shared;


public enum RuleLastExecutionStatusEnum {
    IN_PROGRESS("InProgress"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed"),
    UNKNOWN("Unknown");

    public final String value;

    private RuleLastExecutionStatusEnum(String value) {
        this.value = value;
    }
}
