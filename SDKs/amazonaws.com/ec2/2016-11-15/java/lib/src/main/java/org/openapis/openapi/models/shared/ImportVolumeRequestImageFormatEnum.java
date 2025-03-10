/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ImportVolumeRequestImageFormatEnum - The disk image format.
 */
public enum ImportVolumeRequestImageFormatEnum {
    VMDK("VMDK"),
    RAW("RAW"),
    VHD("VHD");

    @JsonValue
    public final String value;

    private ImportVolumeRequestImageFormatEnum(String value) {
        this.value = value;
    }
}
