/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeServicesXAmzTargetEnum
 */
public enum DescribeServicesXAmzTargetEnum {
    AWS_PRICE_LIST_SERVICE_DESCRIBE_SERVICES("AWSPriceListService.DescribeServices");

    @JsonValue
    public final String value;

    private DescribeServicesXAmzTargetEnum(String value) {
        this.value = value;
    }
}
