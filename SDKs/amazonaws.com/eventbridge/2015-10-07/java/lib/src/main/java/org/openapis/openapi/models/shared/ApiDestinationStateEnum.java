/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ApiDestinationStateEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE");

    @JsonValue
    public final String value;

    private ApiDestinationStateEnum(String value) {
        this.value = value;
    }
}
