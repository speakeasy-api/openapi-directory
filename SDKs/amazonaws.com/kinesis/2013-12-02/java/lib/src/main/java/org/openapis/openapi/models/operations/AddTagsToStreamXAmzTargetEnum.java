/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * AddTagsToStreamXAmzTargetEnum
 */
public enum AddTagsToStreamXAmzTargetEnum {
    KINESIS20131202_ADD_TAGS_TO_STREAM("Kinesis_20131202.AddTagsToStream");

    @JsonValue
    public final String value;

    private AddTagsToStreamXAmzTargetEnum(String value) {
        this.value = value;
    }
}
