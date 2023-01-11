package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsUpdateMembershipStatusRequestBody {
    @JsonProperty("secret")
    public String secret;
    public TeamsUpdateMembershipStatusRequestBody withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public TeamsUpdateMembershipStatusRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}