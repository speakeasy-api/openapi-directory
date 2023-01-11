package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChangeSetsRequestBody {
    @JsonProperty("Catalog")
    public String catalog;
    public ListChangeSetsRequestBody withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterList")
    public openapisdk.models.shared.Filter[] filterList;
    public ListChangeSetsRequestBody withFilterList(openapisdk.models.shared.Filter[] filterList) {
        this.filterList = filterList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListChangeSetsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListChangeSetsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sort")
    public ListChangeSetsRequestBodySort sort;
    public ListChangeSetsRequestBody withSort(ListChangeSetsRequestBodySort sort) {
        this.sort = sort;
        return this;
    }
}