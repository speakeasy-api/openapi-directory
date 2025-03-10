/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ChoiceReasonEnum {
    OUT_OF_SCOPE("OUT_OF_SCOPE"),
    BUSINESS_PRIORITIES("BUSINESS_PRIORITIES"),
    ARCHITECTURE_CONSTRAINTS("ARCHITECTURE_CONSTRAINTS"),
    OTHER("OTHER"),
    NONE("NONE");

    @JsonValue
    public final String value;

    private ChoiceReasonEnum(String value) {
        this.value = value;
    }
}
