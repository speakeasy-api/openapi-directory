package openapisdk.models.shared;


public enum ExperimentStatusEnum {
    PENDING("pending"),
    INITIATING("initiating"),
    RUNNING("running"),
    COMPLETED("completed"),
    STOPPING("stopping"),
    STOPPED("stopped"),
    FAILED("failed");

    public final String value;

    private ExperimentStatusEnum(String value) {
        this.value = value;
    }
}
