/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PageResultAnalysisCategoryDto - OK
 */
public class PageResultAnalysisCategoryDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;

    public PageResultAnalysisCategoryDto withCount(Long count) {
        this.count = count;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public AnalysisCategoryDto[] items;

    public PageResultAnalysisCategoryDto withItems(AnalysisCategoryDto[] items) {
        this.items = items;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageLink")
    public String nextPageLink;

    public PageResultAnalysisCategoryDto withNextPageLink(String nextPageLink) {
        this.nextPageLink = nextPageLink;
        return this;
    }
    
    public PageResultAnalysisCategoryDto(){}
}
