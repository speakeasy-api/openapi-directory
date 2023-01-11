package openapisdk.models.shared;


public enum ActivityTaskTimeoutTypeEnum {
    START_TO_CLOSE("START_TO_CLOSE"),
    SCHEDULE_TO_START("SCHEDULE_TO_START"),
    SCHEDULE_TO_CLOSE("SCHEDULE_TO_CLOSE"),
    HEARTBEAT("HEARTBEAT");

    public final String value;

    private ActivityTaskTimeoutTypeEnum(String value) {
        this.value = value;
    }
}
