package openapisdk.models.shared;


public enum UpdateActionStatusEnum {
    NOT_APPLIED("not-applied"),
    WAITING_TO_START("waiting-to-start"),
    IN_PROGRESS("in-progress"),
    STOPPING("stopping"),
    STOPPED("stopped"),
    COMPLETE("complete"),
    SCHEDULING("scheduling"),
    SCHEDULED("scheduled"),
    NOT_APPLICABLE("not-applicable");

    public final String value;

    private UpdateActionStatusEnum(String value) {
        this.value = value;
    }
}
