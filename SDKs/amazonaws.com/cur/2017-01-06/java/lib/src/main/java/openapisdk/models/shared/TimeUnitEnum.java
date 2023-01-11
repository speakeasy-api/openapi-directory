package openapisdk.models.shared;


public enum TimeUnitEnum {
    HOURLY("HOURLY"),
    DAILY("DAILY"),
    MONTHLY("MONTHLY");

    public final String value;

    private TimeUnitEnum(String value) {
        this.value = value;
    }
}
