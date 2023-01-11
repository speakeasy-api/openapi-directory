package openapisdk.models.shared;


public enum RequestCancelExternalWorkflowExecutionFailedCauseEnum {
    UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION("UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"),
    REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED("REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"),
    OPERATION_NOT_PERMITTED("OPERATION_NOT_PERMITTED");

    public final String value;

    private RequestCancelExternalWorkflowExecutionFailedCauseEnum(String value) {
        this.value = value;
    }
}
