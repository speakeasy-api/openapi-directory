package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountUpdateRecoveryRequestBody {
    @JsonProperty("password")
    public String password;
    public AccountUpdateRecoveryRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("passwordAgain")
    public String passwordAgain;
    public AccountUpdateRecoveryRequestBody withPasswordAgain(String passwordAgain) {
        this.passwordAgain = passwordAgain;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public AccountUpdateRecoveryRequestBody withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public AccountUpdateRecoveryRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}