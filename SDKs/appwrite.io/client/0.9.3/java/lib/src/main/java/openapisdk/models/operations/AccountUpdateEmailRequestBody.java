package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountUpdateEmailRequestBody {
    @JsonProperty("email")
    public String email;
    public AccountUpdateEmailRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public AccountUpdateEmailRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}