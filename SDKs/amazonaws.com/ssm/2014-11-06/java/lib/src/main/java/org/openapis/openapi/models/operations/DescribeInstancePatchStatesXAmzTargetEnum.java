/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeInstancePatchStatesXAmzTargetEnum
 */
public enum DescribeInstancePatchStatesXAmzTargetEnum {
    AMAZON_SSM_DESCRIBE_INSTANCE_PATCH_STATES("AmazonSSM.DescribeInstancePatchStates");

    @JsonValue
    public final String value;

    private DescribeInstancePatchStatesXAmzTargetEnum(String value) {
        this.value = value;
    }
}
