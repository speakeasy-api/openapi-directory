package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountCreateVerificationRequestBody {
    @JsonProperty("url")
    public String url;
    public AccountCreateVerificationRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}