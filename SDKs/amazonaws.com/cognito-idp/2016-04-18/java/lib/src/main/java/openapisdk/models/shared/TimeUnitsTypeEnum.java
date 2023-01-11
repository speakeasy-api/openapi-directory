package openapisdk.models.shared;


public enum TimeUnitsTypeEnum {
    SECONDS("seconds"),
    MINUTES("minutes"),
    HOURS("hours"),
    DAYS("days");

    public final String value;

    private TimeUnitsTypeEnum(String value) {
        this.value = value;
    }
}
