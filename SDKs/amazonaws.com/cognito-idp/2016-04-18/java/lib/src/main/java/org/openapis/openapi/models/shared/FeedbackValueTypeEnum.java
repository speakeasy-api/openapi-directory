/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum FeedbackValueTypeEnum {
    VALID("Valid"),
    INVALID("Invalid");

    @JsonValue
    public final String value;

    private FeedbackValueTypeEnum(String value) {
        this.value = value;
    }
}
