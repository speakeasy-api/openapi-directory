/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateApiRequestBodyProtocolTypeEnum - Represents a protocol type.
 */
public enum CreateApiRequestBodyProtocolTypeEnum {
    WEBSOCKET("WEBSOCKET"),
    HTTP("HTTP");

    @JsonValue
    public final String value;

    private CreateApiRequestBodyProtocolTypeEnum(String value) {
        this.value = value;
    }
}
