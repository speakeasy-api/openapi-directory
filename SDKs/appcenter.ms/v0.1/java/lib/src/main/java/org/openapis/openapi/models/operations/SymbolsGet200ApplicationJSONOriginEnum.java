/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * SymbolsGet200ApplicationJSONOriginEnum - The origin of the symbol file
 */
public enum SymbolsGet200ApplicationJSONOriginEnum {
    SYSTEM("System"),
    USER("User");

    @JsonValue
    public final String value;

    private SymbolsGet200ApplicationJSONOriginEnum(String value) {
        this.value = value;
    }
}
