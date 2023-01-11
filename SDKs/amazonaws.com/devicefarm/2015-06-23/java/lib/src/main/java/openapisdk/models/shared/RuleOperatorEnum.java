package openapisdk.models.shared;


public enum RuleOperatorEnum {
    EQUALS("EQUALS"),
    LESS_THAN("LESS_THAN"),
    LESS_THAN_OR_EQUALS("LESS_THAN_OR_EQUALS"),
    GREATER_THAN("GREATER_THAN"),
    GREATER_THAN_OR_EQUALS("GREATER_THAN_OR_EQUALS"),
    IN("IN"),
    NOT_IN("NOT_IN"),
    CONTAINS("CONTAINS");

    public final String value;

    private RuleOperatorEnum(String value) {
        this.value = value;
    }
}
