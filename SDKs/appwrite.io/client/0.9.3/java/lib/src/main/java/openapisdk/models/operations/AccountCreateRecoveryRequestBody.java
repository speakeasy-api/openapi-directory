package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountCreateRecoveryRequestBody {
    @JsonProperty("email")
    public String email;
    public AccountCreateRecoveryRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public AccountCreateRecoveryRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}