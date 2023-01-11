package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountUpdateNameRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountUpdateNameRequestBody request;
    public AccountUpdateNameRequest withRequest(AccountUpdateNameRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountUpdateNameSecurity security;
    public AccountUpdateNameRequest withSecurity(AccountUpdateNameSecurity security) {
        this.security = security;
        return this;
    }
}