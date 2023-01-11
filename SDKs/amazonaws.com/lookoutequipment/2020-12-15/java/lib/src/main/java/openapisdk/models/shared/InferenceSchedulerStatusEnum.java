package openapisdk.models.shared;


public enum InferenceSchedulerStatusEnum {
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED");

    public final String value;

    private InferenceSchedulerStatusEnum(String value) {
        this.value = value;
    }
}
