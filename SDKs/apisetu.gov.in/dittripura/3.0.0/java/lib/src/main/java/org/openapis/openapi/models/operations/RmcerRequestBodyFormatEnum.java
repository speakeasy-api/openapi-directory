/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * RmcerRequestBodyFormatEnum - The format of the certificate in response.
 */
public enum RmcerRequestBodyFormatEnum {
    PDF("pdf");

    @JsonValue
    public final String value;

    private RmcerRequestBodyFormatEnum(String value) {
        this.value = value;
    }
}
