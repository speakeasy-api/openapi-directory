package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountCreateSessionRequestBody {
    @JsonProperty("email")
    public String email;
    public AccountCreateSessionRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public AccountCreateSessionRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}