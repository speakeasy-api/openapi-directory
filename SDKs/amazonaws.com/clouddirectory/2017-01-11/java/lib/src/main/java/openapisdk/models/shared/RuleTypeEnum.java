package openapisdk.models.shared;


public enum RuleTypeEnum {
    BINARY_LENGTH("BINARY_LENGTH"),
    NUMBER_COMPARISON("NUMBER_COMPARISON"),
    STRING_FROM_SET("STRING_FROM_SET"),
    STRING_LENGTH("STRING_LENGTH");

    public final String value;

    private RuleTypeEnum(String value) {
        this.value = value;
    }
}
