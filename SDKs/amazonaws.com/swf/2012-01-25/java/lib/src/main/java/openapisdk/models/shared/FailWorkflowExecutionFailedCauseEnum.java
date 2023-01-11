package openapisdk.models.shared;


public enum FailWorkflowExecutionFailedCauseEnum {
    UNHANDLED_DECISION("UNHANDLED_DECISION"),
    OPERATION_NOT_PERMITTED("OPERATION_NOT_PERMITTED");

    public final String value;

    private FailWorkflowExecutionFailedCauseEnum(String value) {
        this.value = value;
    }
}
