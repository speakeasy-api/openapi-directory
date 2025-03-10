/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetLegalSearchMurTypeEnum - 
 * Type of MUR : current or archived
 * 
 */
public enum GetLegalSearchMurTypeEnum {
    ARCHIVED("archived"),
    CURRENT("current");

    @JsonValue
    public final String value;

    private GetLegalSearchMurTypeEnum(String value) {
        this.value = value;
    }
}
