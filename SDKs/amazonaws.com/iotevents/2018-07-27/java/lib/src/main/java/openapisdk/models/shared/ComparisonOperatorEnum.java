package openapisdk.models.shared;


public enum ComparisonOperatorEnum {
    GREATER("GREATER"),
    GREATER_OR_EQUAL("GREATER_OR_EQUAL"),
    LESS("LESS"),
    LESS_OR_EQUAL("LESS_OR_EQUAL"),
    EQUAL("EQUAL"),
    NOT_EQUAL("NOT_EQUAL");

    public final String value;

    private ComparisonOperatorEnum(String value) {
        this.value = value;
    }
}
