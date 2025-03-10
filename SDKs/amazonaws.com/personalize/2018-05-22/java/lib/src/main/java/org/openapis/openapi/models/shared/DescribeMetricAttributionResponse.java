/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeMetricAttributionResponse - Success
 */
public class DescribeMetricAttributionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricAttribution")
    public MetricAttribution metricAttribution;

    public DescribeMetricAttributionResponse withMetricAttribution(MetricAttribution metricAttribution) {
        this.metricAttribution = metricAttribution;
        return this;
    }
    
    public DescribeMetricAttributionResponse(){}
}
