package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProductsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public SearchProductsInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public java.util.Map<String, String[]> filters;
    public SearchProductsInput withFilters(java.util.Map<String, String[]> filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public SearchProductsInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public SearchProductsInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortBy")
    public ProductViewSortByEnum sortBy;
    public SearchProductsInput withSortBy(ProductViewSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public SortOrderEnum sortOrder;
    public SearchProductsInput withSortOrder(SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}