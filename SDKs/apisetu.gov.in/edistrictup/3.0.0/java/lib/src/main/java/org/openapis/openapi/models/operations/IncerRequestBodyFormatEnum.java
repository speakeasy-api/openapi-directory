/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * IncerRequestBodyFormatEnum - The format of the certificate in response.
 */
public enum IncerRequestBodyFormatEnum {
    PDF("pdf");

    @JsonValue
    public final String value;

    private IncerRequestBodyFormatEnum(String value) {
        this.value = value;
    }
}
