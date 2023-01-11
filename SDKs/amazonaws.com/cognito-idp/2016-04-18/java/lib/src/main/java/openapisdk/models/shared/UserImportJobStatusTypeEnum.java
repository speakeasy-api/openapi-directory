package openapisdk.models.shared;


public enum UserImportJobStatusTypeEnum {
    CREATED("Created"),
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    STOPPING("Stopping"),
    EXPIRED("Expired"),
    STOPPED("Stopped"),
    FAILED("Failed"),
    SUCCEEDED("Succeeded");

    public final String value;

    private UserImportJobStatusTypeEnum(String value) {
        this.value = value;
    }
}
