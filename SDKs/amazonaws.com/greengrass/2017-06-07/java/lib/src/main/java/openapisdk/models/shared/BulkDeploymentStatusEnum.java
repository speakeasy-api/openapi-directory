package openapisdk.models.shared;


public enum BulkDeploymentStatusEnum {
    INITIALIZING("Initializing"),
    RUNNING("Running"),
    COMPLETED("Completed"),
    STOPPING("Stopping"),
    STOPPED("Stopped"),
    FAILED("Failed");

    public final String value;

    private BulkDeploymentStatusEnum(String value) {
        this.value = value;
    }
}
