package openapisdk.models.shared;


public enum PerEnum {
    UNKNOWN(""),
    DAY("day"),
    WEEK("week");

    public final String value;

    private PerEnum(String value) {
        this.value = value;
    }
}
