package openapisdk.models.shared;


public enum MarketoConnectorOperatorEnum {
    PROJECTION("PROJECTION"),
    LESS_THAN("LESS_THAN"),
    GREATER_THAN("GREATER_THAN"),
    BETWEEN("BETWEEN"),
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

    private MarketoConnectorOperatorEnum(String value) {
        this.value = value;
    }
}
