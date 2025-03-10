/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum FilterOperationEnum {
    EQ("EQ"),
    LT("LT"),
    GT("GT"),
    LTE("LTE"),
    GTE("GTE"),
    REGEX("REGEX"),
    ISNULL("ISNULL");

    @JsonValue
    public final String value;

    private FilterOperationEnum(String value) {
        this.value = value;
    }
}
