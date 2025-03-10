/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateUserSettingsRequestBodyDownloadAllowedEnum - Specifies whether the user can download files from the streaming session to the local device.
 */
public enum UpdateUserSettingsRequestBodyDownloadAllowedEnum {
    DISABLED("Disabled"),
    ENABLED("Enabled");

    @JsonValue
    public final String value;

    private UpdateUserSettingsRequestBodyDownloadAllowedEnum(String value) {
        this.value = value;
    }
}
