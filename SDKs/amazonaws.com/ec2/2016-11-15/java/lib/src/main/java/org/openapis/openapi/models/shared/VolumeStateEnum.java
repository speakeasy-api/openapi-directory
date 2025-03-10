/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * VolumeStateEnum - The volume state.
 */
public enum VolumeStateEnum {
    CREATING("creating"),
    AVAILABLE("available"),
    IN_USE("in-use"),
    DELETING("deleting"),
    DELETED("deleted"),
    ERROR("error");

    @JsonValue
    public final String value;

    private VolumeStateEnum(String value) {
        this.value = value;
    }
}
