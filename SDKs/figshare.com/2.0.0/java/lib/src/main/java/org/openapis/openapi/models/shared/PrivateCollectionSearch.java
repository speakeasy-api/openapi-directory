/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PrivateCollectionSearch - Search Parameters
 */
public class PrivateCollectionSearch {
    /**
     * Only return collections with this doi
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;

    public PrivateCollectionSearch withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    
    /**
     * only return collections from this group
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Integer group;

    public PrivateCollectionSearch withGroup(Integer group) {
        this.group = group;
        return this;
    }
    
    /**
     * Only return collections with this handle
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;

    public PrivateCollectionSearch withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    
    /**
     * only return collections from this institution
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution")
    public Integer institution;

    public PrivateCollectionSearch withInstitution(Integer institution) {
        this.institution = institution;
        return this;
    }
    
    /**
     * Number of results included on a page. Used for pagination with query
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;

    public PrivateCollectionSearch withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    /**
     * Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_since")
    public String modifiedSince;

    public PrivateCollectionSearch withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;

    public PrivateCollectionSearch withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    
    /**
     * The field by which to order.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public PrivateCollectionSearchOrderEnum order;

    public PrivateCollectionSearch withOrder(PrivateCollectionSearchOrderEnum order) {
        this.order = order;
        return this;
    }
    
    /**
     * Direction of ordering
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_direction")
    public PrivateCollectionSearchOrderDirectionEnum orderDirection;

    public PrivateCollectionSearch withOrderDirection(PrivateCollectionSearchOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    
    /**
     * Page number. Used for pagination with page_size
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;

    public PrivateCollectionSearch withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * The number of results included on a page. Used for pagination with page
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;

    public PrivateCollectionSearch withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_since")
    public String publishedSince;

    public PrivateCollectionSearch withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    
    /**
     * Only return collections with this resource_doi
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;

    public PrivateCollectionSearch withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    
    /**
     * only return collections with this resource_id
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;

    public PrivateCollectionSearch withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    
    /**
     * Search term
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_for")
    public String searchFor;

    public PrivateCollectionSearch withSearchFor(String searchFor) {
        this.searchFor = searchFor;
        return this;
    }
    
    public PrivateCollectionSearch(){}
}
