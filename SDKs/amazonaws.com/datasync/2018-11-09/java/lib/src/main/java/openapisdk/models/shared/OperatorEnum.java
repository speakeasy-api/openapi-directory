package openapisdk.models.shared;


public enum OperatorEnum {
    EQUALS("Equals"),
    NOT_EQUALS("NotEquals"),
    IN("In"),
    LESS_THAN_OR_EQUAL("LessThanOrEqual"),
    LESS_THAN("LessThan"),
    GREATER_THAN_OR_EQUAL("GreaterThanOrEqual"),
    GREATER_THAN("GreaterThan"),
    CONTAINS("Contains"),
    NOT_CONTAINS("NotContains"),
    BEGINS_WITH("BeginsWith");

    public final String value;

    private OperatorEnum(String value) {
        this.value = value;
    }
}
