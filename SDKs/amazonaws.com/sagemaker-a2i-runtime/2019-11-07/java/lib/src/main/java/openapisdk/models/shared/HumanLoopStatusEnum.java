package openapisdk.models.shared;


public enum HumanLoopStatusEnum {
    IN_PROGRESS("InProgress"),
    FAILED("Failed"),
    COMPLETED("Completed"),
    STOPPED("Stopped"),
    STOPPING("Stopping");

    public final String value;

    private HumanLoopStatusEnum(String value) {
        this.value = value;
    }
}
