package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SelectAggregateResourceConfigRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public SelectAggregateResourceConfigRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonProperty("Expression")
    public String expression;
    public SelectAggregateResourceConfigRequest withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public SelectAggregateResourceConfigRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public SelectAggregateResourceConfigRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SelectAggregateResourceConfigRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}