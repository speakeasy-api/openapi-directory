/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ImportInstanceResultConversionTaskStateEnum - The state of the conversion task.
 */
public enum ImportInstanceResultConversionTaskStateEnum {
    ACTIVE("active"),
    CANCELLING("cancelling"),
    CANCELLED("cancelled"),
    COMPLETED("completed");

    @JsonValue
    public final String value;

    private ImportInstanceResultConversionTaskStateEnum(String value) {
        this.value = value;
    }
}
