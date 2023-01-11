package openapisdk.models.shared;


public enum CompleteWorkflowExecutionFailedCauseEnum {
    UNHANDLED_DECISION("UNHANDLED_DECISION"),
    OPERATION_NOT_PERMITTED("OPERATION_NOT_PERMITTED");

    public final String value;

    private CompleteWorkflowExecutionFailedCauseEnum(String value) {
        this.value = value;
    }
}
