package openapisdk.models.shared;


public enum CancelTimerFailedCauseEnum {
    TIMER_ID_UNKNOWN("TIMER_ID_UNKNOWN"),
    OPERATION_NOT_PERMITTED("OPERATION_NOT_PERMITTED");

    public final String value;

    private CancelTimerFailedCauseEnum(String value) {
        this.value = value;
    }
}
