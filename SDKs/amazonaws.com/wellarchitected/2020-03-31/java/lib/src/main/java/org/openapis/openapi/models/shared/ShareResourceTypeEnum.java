/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ShareResourceTypeEnum {
    WORKLOAD("WORKLOAD"),
    LENS("LENS");

    @JsonValue
    public final String value;

    private ShareResourceTypeEnum(String value) {
        this.value = value;
    }
}
