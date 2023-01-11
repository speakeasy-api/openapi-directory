package openapisdk.models.shared;


public enum StartTimerFailedCauseEnum {
    TIMER_ID_ALREADY_IN_USE("TIMER_ID_ALREADY_IN_USE"),
    OPEN_TIMERS_LIMIT_EXCEEDED("OPEN_TIMERS_LIMIT_EXCEEDED"),
    TIMER_CREATION_RATE_EXCEEDED("TIMER_CREATION_RATE_EXCEEDED"),
    OPERATION_NOT_PERMITTED("OPERATION_NOT_PERMITTED");

    public final String value;

    private StartTimerFailedCauseEnum(String value) {
        this.value = value;
    }
}
