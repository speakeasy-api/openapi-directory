package openapisdk.models.shared;


public enum TimeOffRequestUnitsEnum {
    DAYS("days"),
    HOURS("hours"),
    OTHER("other");

    public final String value;

    private TimeOffRequestUnitsEnum(String value) {
        this.value = value;
    }
}
