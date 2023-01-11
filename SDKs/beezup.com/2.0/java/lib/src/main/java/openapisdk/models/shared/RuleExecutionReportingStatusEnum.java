package openapisdk.models.shared;


public enum RuleExecutionReportingStatusEnum {
    IN_PROGRESS("InProgress"),
    SUCCEEDED("Succeeded"),
    ALREADY_IN_PROGRESS("AlreadyInProgress"),
    ABORTED("Aborted"),
    FAILED("Failed"),
    UNKNOWN("Unknown");

    public final String value;

    private RuleExecutionReportingStatusEnum(String value) {
        this.value = value;
    }
}
