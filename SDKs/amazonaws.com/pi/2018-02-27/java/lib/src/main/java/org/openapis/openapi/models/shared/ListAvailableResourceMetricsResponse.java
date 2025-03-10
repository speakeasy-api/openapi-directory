/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAvailableResourceMetricsResponse - Success
 */
public class ListAvailableResourceMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metrics")
    public ResponseResourceMetric[] metrics;

    public ListAvailableResourceMetricsResponse withMetrics(ResponseResourceMetric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListAvailableResourceMetricsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListAvailableResourceMetricsResponse(){}
}
