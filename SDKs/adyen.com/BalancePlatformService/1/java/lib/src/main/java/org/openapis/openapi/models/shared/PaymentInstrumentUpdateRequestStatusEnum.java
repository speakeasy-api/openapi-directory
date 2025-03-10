/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PaymentInstrumentUpdateRequestStatusEnum - The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **Active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **Requested**.
 * 
 * Possible values: 
 * 
 *  * **Active**:  The payment instrument is active and can be used to make payments. 
 * 
 *  * **Requested**: The payment instrument has been requested. This state is applicable for physical cards. 
 * 
 * * **Inactive**: The payment instrument is inactive and cannot be used to make payments. 
 * 
 *  * **Suspended**: The payment instrument is temporarily suspended and cannot be used to make payments. 
 * 
 *  * **Closed**: The payment instrument is permanently closed. This action cannot be undone. 
 * 
 * * **Stolen** 
 * 
 *  * **Lost**
 * 
 *  
 */
public enum PaymentInstrumentUpdateRequestStatusEnum {
    ACTIVE("Active"),
    CLOSED("Closed"),
    INACTIVE("Inactive"),
    LOST("Lost"),
    REQUESTED("Requested"),
    STOLEN("Stolen"),
    SUSPENDED("Suspended"),
    BLOCKED("blocked"),
    DISCARDED("discarded");

    @JsonValue
    public final String value;

    private PaymentInstrumentUpdateRequestStatusEnum(String value) {
        this.value = value;
    }
}
