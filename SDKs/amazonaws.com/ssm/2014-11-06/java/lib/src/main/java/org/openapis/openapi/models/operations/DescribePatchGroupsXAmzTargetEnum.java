/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribePatchGroupsXAmzTargetEnum
 */
public enum DescribePatchGroupsXAmzTargetEnum {
    AMAZON_SSM_DESCRIBE_PATCH_GROUPS("AmazonSSM.DescribePatchGroups");

    @JsonValue
    public final String value;

    private DescribePatchGroupsXAmzTargetEnum(String value) {
        this.value = value;
    }
}
