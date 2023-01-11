package openapisdk.models.shared;


public enum InstanceStatusEnum {
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed"),
    SKIPPED("Skipped"),
    UNKNOWN("Unknown"),
    READY("Ready");

    public final String value;

    private InstanceStatusEnum(String value) {
        this.value = value;
    }
}
