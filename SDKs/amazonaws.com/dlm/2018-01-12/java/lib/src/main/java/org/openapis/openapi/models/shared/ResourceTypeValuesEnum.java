/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ResourceTypeValuesEnum {
    VOLUME("VOLUME"),
    INSTANCE("INSTANCE");

    @JsonValue
    public final String value;

    private ResourceTypeValuesEnum(String value) {
        this.value = value;
    }
}
