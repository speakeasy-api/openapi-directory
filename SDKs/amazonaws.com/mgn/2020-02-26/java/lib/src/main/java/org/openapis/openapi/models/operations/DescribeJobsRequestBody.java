/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeJobsRequestBody {
    /**
     * Request to describe Job log filters.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public DescribeJobsRequestBodyFilters filters;

    public DescribeJobsRequestBody withFilters(DescribeJobsRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    
    /**
     * Request to describe job log items by max results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;

    public DescribeJobsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * Request to describe job log items by next token.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public DescribeJobsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public DescribeJobsRequestBody(){}
}
