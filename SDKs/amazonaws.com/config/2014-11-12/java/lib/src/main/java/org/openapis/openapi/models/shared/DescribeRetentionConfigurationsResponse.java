/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeRetentionConfigurationsResponse - Success
 */
public class DescribeRetentionConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public DescribeRetentionConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionConfigurations")
    public RetentionConfiguration[] retentionConfigurations;

    public DescribeRetentionConfigurationsResponse withRetentionConfigurations(RetentionConfiguration[] retentionConfigurations) {
        this.retentionConfigurations = retentionConfigurations;
        return this;
    }
    
    public DescribeRetentionConfigurationsResponse(){}
}
