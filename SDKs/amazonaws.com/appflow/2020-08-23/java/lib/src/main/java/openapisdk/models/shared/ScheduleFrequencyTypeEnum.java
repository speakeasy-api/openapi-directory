package openapisdk.models.shared;


public enum ScheduleFrequencyTypeEnum {
    BYMINUTE("BYMINUTE"),
    HOURLY("HOURLY"),
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    MONTHLY("MONTHLY"),
    ONCE("ONCE");

    public final String value;

    private ScheduleFrequencyTypeEnum(String value) {
        this.value = value;
    }
}
