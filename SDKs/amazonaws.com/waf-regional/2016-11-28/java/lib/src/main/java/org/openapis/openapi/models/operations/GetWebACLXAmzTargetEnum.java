/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetWebACLXAmzTargetEnum
 */
public enum GetWebACLXAmzTargetEnum {
    AWSWAF_REGIONAL20161128_GET_WEB_ACL("AWSWAF_Regional_20161128.GetWebACL");

    @JsonValue
    public final String value;

    private GetWebACLXAmzTargetEnum(String value) {
        this.value = value;
    }
}
