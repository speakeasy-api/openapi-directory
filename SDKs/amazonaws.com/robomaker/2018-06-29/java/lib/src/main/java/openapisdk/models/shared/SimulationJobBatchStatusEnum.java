package openapisdk.models.shared;


public enum SimulationJobBatchStatusEnum {
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    FAILED("Failed"),
    COMPLETED("Completed"),
    CANCELED("Canceled"),
    CANCELING("Canceling"),
    COMPLETING("Completing"),
    TIMING_OUT("TimingOut"),
    TIMED_OUT("TimedOut");

    public final String value;

    private SimulationJobBatchStatusEnum(String value) {
        this.value = value;
    }
}
