/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CheckSchemaVersionValidityXAmzTargetEnum
 */
public enum CheckSchemaVersionValidityXAmzTargetEnum {
    AWS_GLUE_CHECK_SCHEMA_VERSION_VALIDITY("AWSGlue.CheckSchemaVersionValidity");

    @JsonValue
    public final String value;

    private CheckSchemaVersionValidityXAmzTargetEnum(String value) {
        this.value = value;
    }
}
