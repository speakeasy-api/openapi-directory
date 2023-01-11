package openapisdk.models.shared;


public enum SimulationJobStatusEnum {
    PENDING("Pending"),
    PREPARING("Preparing"),
    RUNNING("Running"),
    RESTARTING("Restarting"),
    COMPLETED("Completed"),
    FAILED("Failed"),
    RUNNING_FAILED("RunningFailed"),
    TERMINATING("Terminating"),
    TERMINATED("Terminated"),
    CANCELED("Canceled");

    public final String value;

    private SimulationJobStatusEnum(String value) {
        this.value = value;
    }
}
