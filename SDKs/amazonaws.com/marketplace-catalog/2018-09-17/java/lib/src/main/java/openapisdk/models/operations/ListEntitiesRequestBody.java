package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEntitiesRequestBody {
    @JsonProperty("Catalog")
    public String catalog;
    public ListEntitiesRequestBody withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @JsonProperty("EntityType")
    public String entityType;
    public ListEntitiesRequestBody withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterList")
    public openapisdk.models.shared.Filter[] filterList;
    public ListEntitiesRequestBody withFilterList(openapisdk.models.shared.Filter[] filterList) {
        this.filterList = filterList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListEntitiesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEntitiesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sort")
    public ListEntitiesRequestBodySort sort;
    public ListEntitiesRequestBody withSort(ListEntitiesRequestBodySort sort) {
        this.sort = sort;
        return this;
    }
}