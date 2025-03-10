/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * AlertManagerDefinitionStatusCodeEnum - State of an alert manager definition.
 */
public enum AlertManagerDefinitionStatusCodeEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    CREATION_FAILED("CREATION_FAILED"),
    UPDATE_FAILED("UPDATE_FAILED");

    @JsonValue
    public final String value;

    private AlertManagerDefinitionStatusCodeEnum(String value) {
        this.value = value;
    }
}
