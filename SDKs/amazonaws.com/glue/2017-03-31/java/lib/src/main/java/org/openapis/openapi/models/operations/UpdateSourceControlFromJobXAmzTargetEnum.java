/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateSourceControlFromJobXAmzTargetEnum
 */
public enum UpdateSourceControlFromJobXAmzTargetEnum {
    AWS_GLUE_UPDATE_SOURCE_CONTROL_FROM_JOB("AWSGlue.UpdateSourceControlFromJob");

    @JsonValue
    public final String value;

    private UpdateSourceControlFromJobXAmzTargetEnum(String value) {
        this.value = value;
    }
}
