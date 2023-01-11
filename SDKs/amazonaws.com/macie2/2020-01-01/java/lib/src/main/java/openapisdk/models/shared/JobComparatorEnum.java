package openapisdk.models.shared;


public enum JobComparatorEnum {
    EQ("EQ"),
    GT("GT"),
    GTE("GTE"),
    LT("LT"),
    LTE("LTE"),
    NE("NE"),
    CONTAINS("CONTAINS"),
    STARTS_WITH("STARTS_WITH");

    public final String value;

    private JobComparatorEnum(String value) {
        this.value = value;
    }
}
