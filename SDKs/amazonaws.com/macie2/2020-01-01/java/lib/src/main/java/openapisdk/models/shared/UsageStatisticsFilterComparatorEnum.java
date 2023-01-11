package openapisdk.models.shared;


public enum UsageStatisticsFilterComparatorEnum {
    GT("GT"),
    GTE("GTE"),
    LT("LT"),
    LTE("LTE"),
    EQ("EQ"),
    NE("NE"),
    CONTAINS("CONTAINS");

    public final String value;

    private UsageStatisticsFilterComparatorEnum(String value) {
        this.value = value;
    }
}
