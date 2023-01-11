package openapisdk.models.shared;


public enum RemediationExecutionStateEnum {
    QUEUED("QUEUED"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private RemediationExecutionStateEnum(String value) {
        this.value = value;
    }
}
