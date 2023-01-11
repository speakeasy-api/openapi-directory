package openapisdk.models.operations;


public enum GetDescribeEnvironmentManagedActionsStatusEnum {
    SCHEDULED("Scheduled"),
    PENDING("Pending"),
    RUNNING("Running"),
    UNKNOWN("Unknown");

    public final String value;

    private GetDescribeEnvironmentManagedActionsStatusEnum(String value) {
        this.value = value;
    }
}
