/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * StoreDetailRequestEntityTypeEnum - The type of the entity the payout is processed for.
 */
public enum StoreDetailRequestEntityTypeEnum {
    NATURAL_PERSON("NaturalPerson"),
    COMPANY("Company");

    @JsonValue
    public final String value;

    private StoreDetailRequestEntityTypeEnum(String value) {
        this.value = value;
    }
}
