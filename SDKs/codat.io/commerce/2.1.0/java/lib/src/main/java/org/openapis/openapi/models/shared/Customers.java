/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Customers - OK
 */
public class Customers {
    @JsonProperty("_links")
    public Links links;

    public Customers withLinks(Links links) {
        this.links = links;
        return this;
    }
    
    @JsonProperty("pageNumber")
    public Long pageNumber;

    public Customers withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    
    @JsonProperty("pageSize")
    public Long pageSize;

    public Customers withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Customer[] results;

    public Customers withResults(Customer[] results) {
        this.results = results;
        return this;
    }
    
    @JsonProperty("totalResults")
    public Long totalResults;

    public Customers withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
    
    public Customers(@JsonProperty("_links") Links links, @JsonProperty("pageNumber") Long pageNumber, @JsonProperty("pageSize") Long pageSize, @JsonProperty("totalResults") Long totalResults) {
        this.links = links;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalResults = totalResults;
  }
}
