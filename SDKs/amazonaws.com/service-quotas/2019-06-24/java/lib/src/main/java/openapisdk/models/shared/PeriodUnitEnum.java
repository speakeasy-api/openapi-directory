package openapisdk.models.shared;


public enum PeriodUnitEnum {
    MICROSECOND("MICROSECOND"),
    MILLISECOND("MILLISECOND"),
    SECOND("SECOND"),
    MINUTE("MINUTE"),
    HOUR("HOUR"),
    DAY("DAY"),
    WEEK("WEEK");

    public final String value;

    private PeriodUnitEnum(String value) {
        this.value = value;
    }
}
