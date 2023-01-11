package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAggregationAuthorizationRequest {
    @JsonProperty("AuthorizedAccountId")
    public String authorizedAccountId;
    public PutAggregationAuthorizationRequest withAuthorizedAccountId(String authorizedAccountId) {
        this.authorizedAccountId = authorizedAccountId;
        return this;
    }
    @JsonProperty("AuthorizedAwsRegion")
    public String authorizedAwsRegion;
    public PutAggregationAuthorizationRequest withAuthorizedAwsRegion(String authorizedAwsRegion) {
        this.authorizedAwsRegion = authorizedAwsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public PutAggregationAuthorizationRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}