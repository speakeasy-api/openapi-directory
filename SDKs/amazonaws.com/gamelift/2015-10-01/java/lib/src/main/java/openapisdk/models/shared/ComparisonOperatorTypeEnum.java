package openapisdk.models.shared;


public enum ComparisonOperatorTypeEnum {
    GREATER_THAN_OR_EQUAL_TO_THRESHOLD("GreaterThanOrEqualToThreshold"),
    GREATER_THAN_THRESHOLD("GreaterThanThreshold"),
    LESS_THAN_THRESHOLD("LessThanThreshold"),
    LESS_THAN_OR_EQUAL_TO_THRESHOLD("LessThanOrEqualToThreshold");

    public final String value;

    private ComparisonOperatorTypeEnum(String value) {
        this.value = value;
    }
}
