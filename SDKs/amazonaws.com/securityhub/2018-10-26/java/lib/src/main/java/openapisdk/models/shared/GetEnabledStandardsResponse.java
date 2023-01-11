package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEnabledStandardsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetEnabledStandardsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandardsSubscriptions")
    public StandardsSubscription[] standardsSubscriptions;
    public GetEnabledStandardsResponse withStandardsSubscriptions(StandardsSubscription[] standardsSubscriptions) {
        this.standardsSubscriptions = standardsSubscriptions;
        return this;
    }
}