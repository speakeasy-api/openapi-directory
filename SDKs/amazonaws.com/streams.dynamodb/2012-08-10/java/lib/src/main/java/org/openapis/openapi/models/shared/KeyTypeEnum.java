/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum KeyTypeEnum {
    HASH("HASH"),
    RANGE("RANGE");

    @JsonValue
    public final String value;

    private KeyTypeEnum(String value) {
        this.value = value;
    }
}
