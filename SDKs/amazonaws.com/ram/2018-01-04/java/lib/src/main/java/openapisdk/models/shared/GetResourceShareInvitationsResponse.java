package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceShareInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourceShareInvitationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareInvitations")
    public ResourceShareInvitation[] resourceShareInvitations;
    public GetResourceShareInvitationsResponse withResourceShareInvitations(ResourceShareInvitation[] resourceShareInvitations) {
        this.resourceShareInvitations = resourceShareInvitations;
        return this;
    }
}