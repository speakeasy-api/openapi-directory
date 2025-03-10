/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsErrorCodeEnum - The error code.
 */
public enum DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsErrorCodeEnum {
    RESERVED_INSTANCES_ID_INVALID("reserved-instances-id-invalid"),
    RESERVED_INSTANCES_NOT_IN_QUEUED_STATE("reserved-instances-not-in-queued-state"),
    UNEXPECTED_ERROR("unexpected-error");

    @JsonValue
    public final String value;

    private DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsErrorCodeEnum(String value) {
        this.value = value;
    }
}
