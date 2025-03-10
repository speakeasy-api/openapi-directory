/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CvipcRequestBodyFormatEnum - The format of the certificate in response.
 */
public enum CvipcRequestBodyFormatEnum {
    PDF("pdf");

    @JsonValue
    public final String value;

    private CvipcRequestBodyFormatEnum(String value) {
        this.value = value;
    }
}
