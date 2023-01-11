package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PrivateArticleSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public PrivateArticleSearch withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Integer group;
    public PrivateArticleSearch withGroup(Integer group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public PrivateArticleSearch withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution")
    public Integer institution;
    public PrivateArticleSearch withInstitution(Integer institution) {
        this.institution = institution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item_type")
    public Long itemType;
    public PrivateArticleSearch withItemType(Long itemType) {
        this.itemType = itemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public PrivateArticleSearch withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_since")
    public String modifiedSince;
    public PrivateArticleSearch withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public PrivateArticleSearch withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public PrivateArticleSearchOrderEnum order;
    public PrivateArticleSearch withOrder(PrivateArticleSearchOrderEnum order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_direction")
    public PrivateArticleSearchOrderDirectionEnum orderDirection;
    public PrivateArticleSearch withOrderDirection(PrivateArticleSearchOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PrivateArticleSearch withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public PrivateArticleSearch withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_since")
    public String publishedSince;
    public PrivateArticleSearch withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public PrivateArticleSearch withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;
    public PrivateArticleSearch withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_for")
    public String searchFor;
    public PrivateArticleSearch withSearchFor(String searchFor) {
        this.searchFor = searchFor;
        return this;
    }
}