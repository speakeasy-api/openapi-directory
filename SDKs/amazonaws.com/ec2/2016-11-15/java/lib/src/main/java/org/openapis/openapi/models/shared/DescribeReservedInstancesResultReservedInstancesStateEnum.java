/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeReservedInstancesResultReservedInstancesStateEnum - The state of the Reserved Instance purchase.
 */
public enum DescribeReservedInstancesResultReservedInstancesStateEnum {
    PAYMENT_PENDING("payment-pending"),
    ACTIVE("active"),
    PAYMENT_FAILED("payment-failed"),
    RETIRED("retired"),
    QUEUED("queued"),
    QUEUED_DELETED("queued-deleted");

    @JsonValue
    public final String value;

    private DescribeReservedInstancesResultReservedInstancesStateEnum(String value) {
        this.value = value;
    }
}
