/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DeleteRegistryXAmzTargetEnum
 */
public enum DeleteRegistryXAmzTargetEnum {
    AWS_GLUE_DELETE_REGISTRY("AWSGlue.DeleteRegistry");

    @JsonValue
    public final String value;

    private DeleteRegistryXAmzTargetEnum(String value) {
        this.value = value;
    }
}
