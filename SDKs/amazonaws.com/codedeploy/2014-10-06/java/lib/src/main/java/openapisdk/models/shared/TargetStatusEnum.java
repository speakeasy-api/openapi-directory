package openapisdk.models.shared;


public enum TargetStatusEnum {
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed"),
    SKIPPED("Skipped"),
    UNKNOWN("Unknown"),
    READY("Ready");

    public final String value;

    private TargetStatusEnum(String value) {
        this.value = value;
    }
}
