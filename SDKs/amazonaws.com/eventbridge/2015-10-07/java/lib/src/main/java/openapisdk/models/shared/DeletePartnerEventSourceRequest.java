package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePartnerEventSourceRequest {
    @JsonProperty("Account")
    public String account;
    public DeletePartnerEventSourceRequest withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public DeletePartnerEventSourceRequest withName(String name) {
        this.name = name;
        return this;
    }
}