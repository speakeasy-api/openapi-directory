package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInfrastructureConfigurationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.Filter[] filters;
    public ListInfrastructureConfigurationsRequestBody withFilters(openapisdk.models.shared.Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListInfrastructureConfigurationsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListInfrastructureConfigurationsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}