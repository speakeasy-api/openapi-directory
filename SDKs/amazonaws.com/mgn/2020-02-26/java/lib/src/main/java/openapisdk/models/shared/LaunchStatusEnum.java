package openapisdk.models.shared;


public enum LaunchStatusEnum {
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    LAUNCHED("LAUNCHED"),
    FAILED("FAILED"),
    TERMINATED("TERMINATED");

    public final String value;

    private LaunchStatusEnum(String value) {
        this.value = value;
    }
}
