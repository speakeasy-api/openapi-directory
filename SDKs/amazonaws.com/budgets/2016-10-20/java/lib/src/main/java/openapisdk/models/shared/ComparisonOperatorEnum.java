package openapisdk.models.shared;


public enum ComparisonOperatorEnum {
    GREATER_THAN("GREATER_THAN"),
    LESS_THAN("LESS_THAN"),
    EQUAL_TO("EQUAL_TO");

    public final String value;

    private ComparisonOperatorEnum(String value) {
        this.value = value;
    }
}
