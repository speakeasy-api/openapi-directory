package openapisdk.models.shared;


public enum ComparisonOperatorEnum {
    EQ("EQ"),
    NE("NE"),
    LE("LE"),
    LT("LT"),
    GE("GE"),
    GT("GT"),
    CONTAINS("CONTAINS"),
    NOT_CONTAINS("NOT_CONTAINS"),
    BEGINS_WITH("BEGINS_WITH"),
    IN("IN"),
    BETWEEN("BETWEEN");

    public final String value;

    private ComparisonOperatorEnum(String value) {
        this.value = value;
    }
}
