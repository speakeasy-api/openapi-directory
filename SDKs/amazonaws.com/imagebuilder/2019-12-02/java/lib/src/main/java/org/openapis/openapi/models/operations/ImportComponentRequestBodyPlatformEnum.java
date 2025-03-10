/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ImportComponentRequestBodyPlatformEnum - The platform of the component.
 */
public enum ImportComponentRequestBodyPlatformEnum {
    WINDOWS("Windows"),
    LINUX("Linux");

    @JsonValue
    public final String value;

    private ImportComponentRequestBodyPlatformEnum(String value) {
        this.value = value;
    }
}
