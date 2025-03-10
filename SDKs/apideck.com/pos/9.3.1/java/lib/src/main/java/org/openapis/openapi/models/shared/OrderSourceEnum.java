/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * OrderSourceEnum - Source of order. Indicates the way that the order was placed.
 */
public enum OrderSourceEnum {
    IN_STORE("in-store"),
    ONLINE("online"),
    OPT("opt"),
    API("api"),
    KIOSK("kiosk"),
    CALLER_ID("caller-id"),
    GOOGLE("google"),
    INVOICE("invoice");

    @JsonValue
    public final String value;

    private OrderSourceEnum(String value) {
        this.value = value;
    }
}
