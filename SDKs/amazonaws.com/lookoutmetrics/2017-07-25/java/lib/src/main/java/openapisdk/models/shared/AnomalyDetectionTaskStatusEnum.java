package openapisdk.models.shared;


public enum AnomalyDetectionTaskStatusEnum {
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    FAILED_TO_SCHEDULE("FAILED_TO_SCHEDULE");

    public final String value;

    private AnomalyDetectionTaskStatusEnum(String value) {
        this.value = value;
    }
}
