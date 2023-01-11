package openapisdk.models.shared;


public enum TimeRangeEnum {
    MONTH_TO_DATE("MONTH_TO_DATE"),
    PAST30_DAYS("PAST_30_DAYS");

    public final String value;

    private TimeRangeEnum(String value) {
        this.value = value;
    }
}
