package openapisdk.models.shared;


public enum SignalExternalWorkflowExecutionFailedCauseEnum {
    UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION("UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"),
    SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED("SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"),
    OPERATION_NOT_PERMITTED("OPERATION_NOT_PERMITTED");

    public final String value;

    private SignalExternalWorkflowExecutionFailedCauseEnum(String value) {
        this.value = value;
    }
}
