package openapisdk.models.shared;


public enum ScheduleStateEnum {
    SCHEDULED("SCHEDULED"),
    NOT_SCHEDULED("NOT_SCHEDULED"),
    TRANSITIONING("TRANSITIONING");

    public final String value;

    private ScheduleStateEnum(String value) {
        this.value = value;
    }
}
