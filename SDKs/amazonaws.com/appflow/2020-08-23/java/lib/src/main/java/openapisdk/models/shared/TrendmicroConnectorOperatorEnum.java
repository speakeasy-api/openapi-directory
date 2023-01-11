package openapisdk.models.shared;


public enum TrendmicroConnectorOperatorEnum {
    PROJECTION("PROJECTION"),
    EQUAL_TO("EQUAL_TO"),
    ADDITION("ADDITION"),
    MULTIPLICATION("MULTIPLICATION"),
    DIVISION("DIVISION"),
    SUBTRACTION("SUBTRACTION"),
    MASK_ALL("MASK_ALL"),
    MASK_FIRST_N("MASK_FIRST_N"),
    MASK_LAST_N("MASK_LAST_N"),
    VALIDATE_NON_NULL("VALIDATE_NON_NULL"),
    VALIDATE_NON_ZERO("VALIDATE_NON_ZERO"),
    VALIDATE_NON_NEGATIVE("VALIDATE_NON_NEGATIVE"),
    VALIDATE_NUMERIC("VALIDATE_NUMERIC"),
    NO_OP("NO_OP");

    public final String value;

    private TrendmicroConnectorOperatorEnum(String value) {
        this.value = value;
    }
}
