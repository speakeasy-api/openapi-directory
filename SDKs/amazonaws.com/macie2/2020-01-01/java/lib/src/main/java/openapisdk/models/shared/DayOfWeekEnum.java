package openapisdk.models.shared;


public enum DayOfWeekEnum {
    SUNDAY("SUNDAY"),
    MONDAY("MONDAY"),
    TUESDAY("TUESDAY"),
    WEDNESDAY("WEDNESDAY"),
    THURSDAY("THURSDAY"),
    FRIDAY("FRIDAY"),
    SATURDAY("SATURDAY");

    public final String value;

    private DayOfWeekEnum(String value) {
        this.value = value;
    }
}
