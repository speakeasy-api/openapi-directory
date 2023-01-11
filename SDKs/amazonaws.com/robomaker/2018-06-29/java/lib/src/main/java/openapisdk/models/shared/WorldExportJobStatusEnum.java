package openapisdk.models.shared;


public enum WorldExportJobStatusEnum {
    PENDING("Pending"),
    RUNNING("Running"),
    COMPLETED("Completed"),
    FAILED("Failed"),
    CANCELING("Canceling"),
    CANCELED("Canceled");

    public final String value;

    private WorldExportJobStatusEnum(String value) {
        this.value = value;
    }
}
