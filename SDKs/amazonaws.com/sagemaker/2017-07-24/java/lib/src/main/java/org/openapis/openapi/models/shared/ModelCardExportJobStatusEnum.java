/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ModelCardExportJobStatusEnum {
    IN_PROGRESS("InProgress"),
    COMPLETED("Completed"),
    FAILED("Failed");

    @JsonValue
    public final String value;

    private ModelCardExportJobStatusEnum(String value) {
        this.value = value;
    }
}
