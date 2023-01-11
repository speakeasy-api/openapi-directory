package openapisdk.models.shared;


public enum NodeUpdateStatusEnum {
    NOT_APPLIED("not-applied"),
    WAITING_TO_START("waiting-to-start"),
    IN_PROGRESS("in-progress"),
    STOPPING("stopping"),
    STOPPED("stopped"),
    COMPLETE("complete");

    public final String value;

    private NodeUpdateStatusEnum(String value) {
        this.value = value;
    }
}
