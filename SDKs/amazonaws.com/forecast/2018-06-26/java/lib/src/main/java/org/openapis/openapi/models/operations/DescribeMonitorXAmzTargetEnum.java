/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeMonitorXAmzTargetEnum
 */
public enum DescribeMonitorXAmzTargetEnum {
    AMAZON_FORECAST_DESCRIBE_MONITOR("AmazonForecast.DescribeMonitor");

    @JsonValue
    public final String value;

    private DescribeMonitorXAmzTargetEnum(String value) {
        this.value = value;
    }
}
