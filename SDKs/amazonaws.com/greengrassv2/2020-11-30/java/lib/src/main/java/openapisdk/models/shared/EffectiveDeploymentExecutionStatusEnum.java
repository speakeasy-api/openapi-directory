package openapisdk.models.shared;


public enum EffectiveDeploymentExecutionStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    QUEUED("QUEUED"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED"),
    TIMED_OUT("TIMED_OUT"),
    CANCELED("CANCELED"),
    REJECTED("REJECTED");

    public final String value;

    private EffectiveDeploymentExecutionStatusEnum(String value) {
        this.value = value;
    }
}
