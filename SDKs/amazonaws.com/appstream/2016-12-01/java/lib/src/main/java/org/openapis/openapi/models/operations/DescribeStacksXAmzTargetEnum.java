/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeStacksXAmzTargetEnum
 */
public enum DescribeStacksXAmzTargetEnum {
    PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_STACKS("PhotonAdminProxyService.DescribeStacks");

    @JsonValue
    public final String value;

    private DescribeStacksXAmzTargetEnum(String value) {
        this.value = value;
    }
}
