/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum VolumeRetentionModeEnum {
    RETAIN("RETAIN"),
    DELETE("DELETE");

    @JsonValue
    public final String value;

    private VolumeRetentionModeEnum(String value) {
        this.value = value;
    }
}
