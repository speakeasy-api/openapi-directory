/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * TagsGetGroupsStatusEnum - Status of the datapoint
 */
public enum TagsGetGroupsStatusEnum {
    DELETED("deleted"),
    ACTIVE("active");

    @JsonValue
    public final String value;

    private TagsGetGroupsStatusEnum(String value) {
        this.value = value;
    }
}
