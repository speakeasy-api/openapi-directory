package openapisdk.models.shared;


public enum ConnectionScheduleTimeUnitEnum {
    MINUTES("minutes"),
    HOURS("hours"),
    DAYS("days"),
    WEEKS("weeks"),
    MONTHS("months");

    public final String value;

    private ConnectionScheduleTimeUnitEnum(String value) {
        this.value = value;
    }
}
