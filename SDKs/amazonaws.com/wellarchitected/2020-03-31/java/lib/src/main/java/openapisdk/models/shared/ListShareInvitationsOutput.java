package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListShareInvitationsOutput
 * Input for List Share Invitations
**/
public class ListShareInvitationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListShareInvitationsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareInvitationSummaries")
    public ShareInvitationSummary[] shareInvitationSummaries;
    public ListShareInvitationsOutput withShareInvitationSummaries(ShareInvitationSummary[] shareInvitationSummaries) {
        this.shareInvitationSummaries = shareInvitationSummaries;
        return this;
    }
}