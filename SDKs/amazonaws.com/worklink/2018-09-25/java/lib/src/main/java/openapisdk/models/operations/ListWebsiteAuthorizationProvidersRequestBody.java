package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWebsiteAuthorizationProvidersRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public ListWebsiteAuthorizationProvidersRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListWebsiteAuthorizationProvidersRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWebsiteAuthorizationProvidersRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}