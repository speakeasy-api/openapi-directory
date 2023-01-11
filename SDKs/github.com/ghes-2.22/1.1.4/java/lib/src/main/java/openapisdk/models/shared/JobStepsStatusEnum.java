package openapisdk.models.shared;


public enum JobStepsStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed");

    public final String value;

    private JobStepsStatusEnum(String value) {
        this.value = value;
    }
}
