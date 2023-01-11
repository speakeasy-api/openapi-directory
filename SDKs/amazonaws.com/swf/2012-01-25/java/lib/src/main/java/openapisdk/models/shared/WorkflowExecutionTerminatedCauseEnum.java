package openapisdk.models.shared;


public enum WorkflowExecutionTerminatedCauseEnum {
    CHILD_POLICY_APPLIED("CHILD_POLICY_APPLIED"),
    EVENT_LIMIT_EXCEEDED("EVENT_LIMIT_EXCEEDED"),
    OPERATOR_INITIATED("OPERATOR_INITIATED");

    public final String value;

    private WorkflowExecutionTerminatedCauseEnum(String value) {
        this.value = value;
    }
}
