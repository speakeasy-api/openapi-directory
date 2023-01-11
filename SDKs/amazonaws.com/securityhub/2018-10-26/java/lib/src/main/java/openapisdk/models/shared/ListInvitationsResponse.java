package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Invitations")
    public Invitation[] invitations;
    public ListInvitationsResponse withInvitations(Invitation[] invitations) {
        this.invitations = invitations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListInvitationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}