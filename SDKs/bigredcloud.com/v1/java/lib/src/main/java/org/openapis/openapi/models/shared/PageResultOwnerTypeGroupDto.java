/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PageResultOwnerTypeGroupDto - OK
 */
public class PageResultOwnerTypeGroupDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;

    public PageResultOwnerTypeGroupDto withCount(Long count) {
        this.count = count;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public OwnerTypeGroupDto[] items;

    public PageResultOwnerTypeGroupDto withItems(OwnerTypeGroupDto[] items) {
        this.items = items;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageLink")
    public String nextPageLink;

    public PageResultOwnerTypeGroupDto withNextPageLink(String nextPageLink) {
        this.nextPageLink = nextPageLink;
        return this;
    }
    
    public PageResultOwnerTypeGroupDto(){}
}
