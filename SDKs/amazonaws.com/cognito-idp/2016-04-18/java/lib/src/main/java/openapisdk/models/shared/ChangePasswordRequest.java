package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChangePasswordRequest
 * Represents the request to change a user password.
**/
public class ChangePasswordRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public ChangePasswordRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("PreviousPassword")
    public String previousPassword;
    public ChangePasswordRequest withPreviousPassword(String previousPassword) {
        this.previousPassword = previousPassword;
        return this;
    }
    @JsonProperty("ProposedPassword")
    public String proposedPassword;
    public ChangePasswordRequest withProposedPassword(String proposedPassword) {
        this.proposedPassword = proposedPassword;
        return this;
    }
}