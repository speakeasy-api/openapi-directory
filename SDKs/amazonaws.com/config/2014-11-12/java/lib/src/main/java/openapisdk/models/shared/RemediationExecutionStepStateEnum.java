package openapisdk.models.shared;


public enum RemediationExecutionStepStateEnum {
    SUCCEEDED("SUCCEEDED"),
    PENDING("PENDING"),
    FAILED("FAILED");

    public final String value;

    private RemediationExecutionStepStateEnum(String value) {
        this.value = value;
    }
}
