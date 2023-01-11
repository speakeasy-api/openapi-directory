package openapisdk.models.shared;


public enum WorldGenerationJobStatusEnum {
    PENDING("Pending"),
    RUNNING("Running"),
    COMPLETED("Completed"),
    FAILED("Failed"),
    PARTIAL_FAILED("PartialFailed"),
    CANCELING("Canceling"),
    CANCELED("Canceled");

    public final String value;

    private WorldGenerationJobStatusEnum(String value) {
        this.value = value;
    }
}
