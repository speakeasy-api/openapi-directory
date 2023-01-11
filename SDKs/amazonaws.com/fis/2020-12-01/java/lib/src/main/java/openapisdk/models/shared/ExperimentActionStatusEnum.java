package openapisdk.models.shared;


public enum ExperimentActionStatusEnum {
    PENDING("pending"),
    INITIATING("initiating"),
    RUNNING("running"),
    COMPLETED("completed"),
    CANCELLED("cancelled"),
    STOPPING("stopping"),
    STOPPED("stopped"),
    FAILED("failed");

    public final String value;

    private ExperimentActionStatusEnum(String value) {
        this.value = value;
    }
}
