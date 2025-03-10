/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PageResultVatRateDto - OK
 */
public class PageResultVatRateDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;

    public PageResultVatRateDto withCount(Long count) {
        this.count = count;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public VatRateDto[] items;

    public PageResultVatRateDto withItems(VatRateDto[] items) {
        this.items = items;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageLink")
    public String nextPageLink;

    public PageResultVatRateDto withNextPageLink(String nextPageLink) {
        this.nextPageLink = nextPageLink;
        return this;
    }
    
    public PageResultVatRateDto(){}
}
