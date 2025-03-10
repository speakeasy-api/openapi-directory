/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum SingularConnectorOperatorEnum {
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

    @JsonValue
    public final String value;

    private SingularConnectorOperatorEnum(String value) {
        this.value = value;
    }
}
