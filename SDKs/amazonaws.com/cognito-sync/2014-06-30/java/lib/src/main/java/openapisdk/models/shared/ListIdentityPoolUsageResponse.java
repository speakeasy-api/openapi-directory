package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIdentityPoolUsageResponse
 * Returned for a successful ListIdentityPoolUsage request.
**/
public class ListIdentityPoolUsageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public ListIdentityPoolUsageResponse withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolUsages")
    public IdentityPoolUsage[] identityPoolUsages;
    public ListIdentityPoolUsageResponse withIdentityPoolUsages(IdentityPoolUsage[] identityPoolUsages) {
        this.identityPoolUsages = identityPoolUsages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListIdentityPoolUsageResponse withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIdentityPoolUsageResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}