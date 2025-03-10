/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * StoreStatusEnum - The store status
 * * Active:  When the store is active
 * * SystemBlocked:  When the store is blocked by the system
 * * UserBlocked: When the store is blocked on GO not on the system
 * 
 */
public enum StoreStatusEnum {
    ACTIVE("Active"),
    SYSTEM_BLOCKED("SystemBlocked"),
    USER_BLOCKED("UserBlocked");

    @JsonValue
    public final String value;

    private StoreStatusEnum(String value) {
        this.value = value;
    }
}
