/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * SearchPrettyEnum
 */
public enum SearchPrettyEnum {
    TRUE("true");

    @JsonValue
    public final String value;

    private SearchPrettyEnum(String value) {
        this.value = value;
    }
}
