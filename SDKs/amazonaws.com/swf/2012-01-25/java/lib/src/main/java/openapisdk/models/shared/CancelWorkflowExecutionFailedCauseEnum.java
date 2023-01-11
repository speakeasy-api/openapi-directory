package openapisdk.models.shared;


public enum CancelWorkflowExecutionFailedCauseEnum {
    UNHANDLED_DECISION("UNHANDLED_DECISION"),
    OPERATION_NOT_PERMITTED("OPERATION_NOT_PERMITTED");

    public final String value;

    private CancelWorkflowExecutionFailedCauseEnum(String value) {
        this.value = value;
    }
}
