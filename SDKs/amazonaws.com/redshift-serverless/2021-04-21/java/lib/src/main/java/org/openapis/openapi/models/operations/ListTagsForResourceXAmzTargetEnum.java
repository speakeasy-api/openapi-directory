/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ListTagsForResourceXAmzTargetEnum
 */
public enum ListTagsForResourceXAmzTargetEnum {
    REDSHIFT_SERVERLESS_LIST_TAGS_FOR_RESOURCE("RedshiftServerless.ListTagsForResource");

    @JsonValue
    public final String value;

    private ListTagsForResourceXAmzTargetEnum(String value) {
        this.value = value;
    }
}
