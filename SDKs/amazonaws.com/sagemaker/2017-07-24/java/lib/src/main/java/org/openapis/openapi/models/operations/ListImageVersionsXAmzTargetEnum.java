/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ListImageVersionsXAmzTargetEnum
 */
public enum ListImageVersionsXAmzTargetEnum {
    SAGE_MAKER_LIST_IMAGE_VERSIONS("SageMaker.ListImageVersions");

    @JsonValue
    public final String value;

    private ListImageVersionsXAmzTargetEnum(String value) {
        this.value = value;
    }
}
