/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribePatchPropertiesXAmzTargetEnum
 */
public enum DescribePatchPropertiesXAmzTargetEnum {
    AMAZON_SSM_DESCRIBE_PATCH_PROPERTIES("AmazonSSM.DescribePatchProperties");

    @JsonValue
    public final String value;

    private DescribePatchPropertiesXAmzTargetEnum(String value) {
        this.value = value;
    }
}
