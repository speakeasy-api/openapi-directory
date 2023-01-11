package openapisdk.models.shared;


public enum TimeUnitEnum {
    DAILY("DAILY"),
    MONTHLY("MONTHLY"),
    QUARTERLY("QUARTERLY"),
    ANNUALLY("ANNUALLY");

    public final String value;

    private TimeUnitEnum(String value) {
        this.value = value;
    }
}
