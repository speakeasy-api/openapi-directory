/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetPermissionPolicyXAmzTargetEnum
 */
public enum GetPermissionPolicyXAmzTargetEnum {
    AWSWAF20150824_GET_PERMISSION_POLICY("AWSWAF_20150824.GetPermissionPolicy");

    @JsonValue
    public final String value;

    private GetPermissionPolicyXAmzTargetEnum(String value) {
        this.value = value;
    }
}
