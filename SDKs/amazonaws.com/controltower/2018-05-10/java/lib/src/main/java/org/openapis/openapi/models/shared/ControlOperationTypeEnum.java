/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ControlOperationTypeEnum {
    ENABLE_CONTROL("ENABLE_CONTROL"),
    DISABLE_CONTROL("DISABLE_CONTROL");

    @JsonValue
    public final String value;

    private ControlOperationTypeEnum(String value) {
        this.value = value;
    }
}
