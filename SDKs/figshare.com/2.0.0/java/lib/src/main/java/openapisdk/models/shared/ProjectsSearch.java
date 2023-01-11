package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Integer group;
    public ProjectsSearch withGroup(Integer group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution")
    public Integer institution;
    public ProjectsSearch withInstitution(Integer institution) {
        this.institution = institution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public ProjectsSearch withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_since")
    public String modifiedSince;
    public ProjectsSearch withModifiedSince(String modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public ProjectsSearch withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public ProjectsSearchOrderEnum order;
    public ProjectsSearch withOrder(ProjectsSearchOrderEnum order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_direction")
    public ProjectsSearchOrderDirectionEnum orderDirection;
    public ProjectsSearch withOrderDirection(ProjectsSearchOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ProjectsSearch withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ProjectsSearch withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_since")
    public String publishedSince;
    public ProjectsSearch withPublishedSince(String publishedSince) {
        this.publishedSince = publishedSince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_for")
    public String searchFor;
    public ProjectsSearch withSearchFor(String searchFor) {
        this.searchFor = searchFor;
        return this;
    }
}