/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Govid401ApplicationJSONErrorEnum {
    INVALID_AUTHENTICATION("invalid_authentication"),
    INVALID_AUTHORIZATION("invalid_authorization");

    @JsonValue
    public final String value;

    private Govid401ApplicationJSONErrorEnum(String value) {
        this.value = value;
    }
}
