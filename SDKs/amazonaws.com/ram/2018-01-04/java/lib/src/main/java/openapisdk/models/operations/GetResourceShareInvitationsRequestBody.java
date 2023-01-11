package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceShareInvitationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetResourceShareInvitationsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourceShareInvitationsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareArns")
    public String[] resourceShareArns;
    public GetResourceShareInvitationsRequestBody withResourceShareArns(String[] resourceShareArns) {
        this.resourceShareArns = resourceShareArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareInvitationArns")
    public String[] resourceShareInvitationArns;
    public GetResourceShareInvitationsRequestBody withResourceShareInvitationArns(String[] resourceShareInvitationArns) {
        this.resourceShareInvitationArns = resourceShareInvitationArns;
        return this;
    }
}