package openapisdk.models.shared;


public enum LifecycleEventStatusEnum {
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed"),
    SKIPPED("Skipped"),
    UNKNOWN("Unknown");

    public final String value;

    private LifecycleEventStatusEnum(String value) {
        this.value = value;
    }
}
