package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAggregationAuthorizationRequest {
    @JsonProperty("AuthorizedAccountId")
    public String authorizedAccountId;
    public DeleteAggregationAuthorizationRequest withAuthorizedAccountId(String authorizedAccountId) {
        this.authorizedAccountId = authorizedAccountId;
        return this;
    }
    @JsonProperty("AuthorizedAwsRegion")
    public String authorizedAwsRegion;
    public DeleteAggregationAuthorizationRequest withAuthorizedAwsRegion(String authorizedAwsRegion) {
        this.authorizedAwsRegion = authorizedAwsRegion;
        return this;
    }
}