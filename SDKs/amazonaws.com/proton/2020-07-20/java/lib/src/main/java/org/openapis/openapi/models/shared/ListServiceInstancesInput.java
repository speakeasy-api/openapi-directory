/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListServiceInstancesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ListServiceInstancesFilter[] filters;

    public ListServiceInstancesInput withFilters(ListServiceInstancesFilter[] filters) {
        this.filters = filters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;

    public ListServiceInstancesInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListServiceInstancesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;

    public ListServiceInstancesInput withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public ListServiceInstancesSortByEnum sortBy;

    public ListServiceInstancesInput withSortBy(ListServiceInstancesSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortOrderEnum sortOrder;

    public ListServiceInstancesInput withSortOrder(SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    
    public ListServiceInstancesInput(){}
}
