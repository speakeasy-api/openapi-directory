/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetSecurityConfigurationXAmzTargetEnum
 */
public enum GetSecurityConfigurationXAmzTargetEnum {
    AWS_GLUE_GET_SECURITY_CONFIGURATION("AWSGlue.GetSecurityConfiguration");

    @JsonValue
    public final String value;

    private GetSecurityConfigurationXAmzTargetEnum(String value) {
        this.value = value;
    }
}
