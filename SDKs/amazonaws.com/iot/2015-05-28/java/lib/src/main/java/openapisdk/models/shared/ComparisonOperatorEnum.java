package openapisdk.models.shared;


public enum ComparisonOperatorEnum {
    LESS_THAN("less-than"),
    LESS_THAN_EQUALS("less-than-equals"),
    GREATER_THAN("greater-than"),
    GREATER_THAN_EQUALS("greater-than-equals"),
    IN_CIDR_SET("in-cidr-set"),
    NOT_IN_CIDR_SET("not-in-cidr-set"),
    IN_PORT_SET("in-port-set"),
    NOT_IN_PORT_SET("not-in-port-set"),
    IN_SET("in-set"),
    NOT_IN_SET("not-in-set");

    public final String value;

    private ComparisonOperatorEnum(String value) {
        this.value = value;
    }
}
