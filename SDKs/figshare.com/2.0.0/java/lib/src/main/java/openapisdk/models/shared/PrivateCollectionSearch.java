package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PrivateCollectionSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public PrivateCollectionSearch withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Integer group;
    public PrivateCollectionSearch withGroup(Integer group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public PrivateCollectionSearch withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution")
    public Integer institution;
    public PrivateCollectionSearch withInstitution(Integer institution) {
        this.institution = institution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public PrivateCollectionSearch withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_since")
    public String modifiedSince;
    public PrivateCollectionSearch withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public PrivateCollectionSearch withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public PrivateCollectionSearchOrderEnum order;
    public PrivateCollectionSearch withOrder(PrivateCollectionSearchOrderEnum order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_direction")
    public PrivateCollectionSearchOrderDirectionEnum orderDirection;
    public PrivateCollectionSearch withOrderDirection(PrivateCollectionSearchOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PrivateCollectionSearch withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public PrivateCollectionSearch withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_since")
    public String publishedSince;
    public PrivateCollectionSearch withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public PrivateCollectionSearch withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;
    public PrivateCollectionSearch withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_for")
    public String searchFor;
    public PrivateCollectionSearch withSearchFor(String searchFor) {
        this.searchFor = searchFor;
        return this;
    }
}