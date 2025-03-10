/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PageResultSalesQueryDto - OK
 */
public class PageResultSalesQueryDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;

    public PageResultSalesQueryDto withCount(Long count) {
        this.count = count;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public SalesQueryDto[] items;

    public PageResultSalesQueryDto withItems(SalesQueryDto[] items) {
        this.items = items;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageLink")
    public String nextPageLink;

    public PageResultSalesQueryDto withNextPageLink(String nextPageLink) {
        this.nextPageLink = nextPageLink;
        return this;
    }
    
    public PageResultSalesQueryDto(){}
}
