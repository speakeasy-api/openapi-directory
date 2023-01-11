package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginRequest {
    @JsonProperty("login")
    public String login;
    public LoginRequest withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public LoginRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}