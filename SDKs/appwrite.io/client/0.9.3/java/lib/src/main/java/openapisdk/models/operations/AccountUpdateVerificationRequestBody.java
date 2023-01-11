package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountUpdateVerificationRequestBody {
    @JsonProperty("secret")
    public String secret;
    public AccountUpdateVerificationRequestBody withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public AccountUpdateVerificationRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}