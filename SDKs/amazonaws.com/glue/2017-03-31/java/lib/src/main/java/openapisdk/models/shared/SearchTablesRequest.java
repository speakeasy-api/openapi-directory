package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchTablesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public SearchTablesRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public PropertyPredicate[] filters;
    public SearchTablesRequest withFilters(PropertyPredicate[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public SearchTablesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SearchTablesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceShareType")
    public ResourceShareTypeEnum resourceShareType;
    public SearchTablesRequest withResourceShareType(ResourceShareTypeEnum resourceShareType) {
        this.resourceShareType = resourceShareType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SearchText")
    public String searchText;
    public SearchTablesRequest withSearchText(String searchText) {
        this.searchText = searchText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortCriteria")
    public SortCriterion[] sortCriteria;
    public SearchTablesRequest withSortCriteria(SortCriterion[] sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}