package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public CollectionSearch withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Integer group;
    public CollectionSearch withGroup(Integer group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public CollectionSearch withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution")
    public Integer institution;
    public CollectionSearch withInstitution(Integer institution) {
        this.institution = institution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public CollectionSearch withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_since")
    public String modifiedSince;
    public CollectionSearch withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public CollectionSearch withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public CollectionSearchOrderEnum order;
    public CollectionSearch withOrder(CollectionSearchOrderEnum order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_direction")
    public CollectionSearchOrderDirectionEnum orderDirection;
    public CollectionSearch withOrderDirection(CollectionSearchOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public CollectionSearch withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public CollectionSearch withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_since")
    public String publishedSince;
    public CollectionSearch withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public CollectionSearch withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_for")
    public String searchFor;
    public CollectionSearch withSearchFor(String searchFor) {
        this.searchFor = searchFor;
        return this;
    }
}