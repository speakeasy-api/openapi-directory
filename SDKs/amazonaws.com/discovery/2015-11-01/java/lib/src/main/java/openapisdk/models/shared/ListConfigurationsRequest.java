package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConfigurationsRequest {
    @JsonProperty("configurationType")
    public ConfigurationItemTypeEnum configurationType;
    public ListConfigurationsRequest withConfigurationType(ConfigurationItemTypeEnum configurationType) {
        this.configurationType = configurationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public Filter[] filters;
    public ListConfigurationsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListConfigurationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListConfigurationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public OrderByElement[] orderBy;
    public ListConfigurationsRequest withOrderBy(OrderByElement[] orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}