/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum OfferOwnershipEnum {
    SUBSCRIPTION("Subscription"),
    FREE("Free"),
    RENT("Rent"),
    OWN("Own"),
    NONE("None");

    @JsonValue
    public final String value;

    private OfferOwnershipEnum(String value) {
        this.value = value;
    }
}
