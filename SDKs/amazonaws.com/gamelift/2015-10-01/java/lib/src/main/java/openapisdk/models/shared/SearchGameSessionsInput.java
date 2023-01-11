package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchGameSessionsInput
 * Represents the input for a request operation.
**/
public class SearchGameSessionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AliasId")
    public String aliasId;
    public SearchGameSessionsInput withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterExpression")
    public String filterExpression;
    public SearchGameSessionsInput withFilterExpression(String filterExpression) {
        this.filterExpression = filterExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public SearchGameSessionsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public SearchGameSessionsInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public SearchGameSessionsInput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SearchGameSessionsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortExpression")
    public String sortExpression;
    public SearchGameSessionsInput withSortExpression(String sortExpression) {
        this.sortExpression = sortExpression;
        return this;
    }
}