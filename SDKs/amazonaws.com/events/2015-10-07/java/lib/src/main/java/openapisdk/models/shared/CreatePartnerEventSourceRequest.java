package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePartnerEventSourceRequest {
    @JsonProperty("Account")
    public String account;
    public CreatePartnerEventSourceRequest withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreatePartnerEventSourceRequest withName(String name) {
        this.name = name;
        return this;
    }
}