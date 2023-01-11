package openapisdk.models.shared;


public enum ComparisonOperatorEnum {
    EQ("EQ"),
    NE("NE"),
    LE("LE"),
    LT("LT"),
    GE("GE"),
    GT("GT");

    public final String value;

    private ComparisonOperatorEnum(String value) {
        this.value = value;
    }
}
