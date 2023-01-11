package openapisdk.models.shared;


public enum TimeUnitEnum {
    MILLISECONDS("MILLISECONDS"),
    SECONDS("SECONDS"),
    MICROSECONDS("MICROSECONDS"),
    NANOSECONDS("NANOSECONDS");

    public final String value;

    private TimeUnitEnum(String value) {
        this.value = value;
    }
}
