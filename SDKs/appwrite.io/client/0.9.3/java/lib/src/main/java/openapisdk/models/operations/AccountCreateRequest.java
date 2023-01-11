package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountCreateRequestBody request;
    public AccountCreateRequest withRequest(AccountCreateRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountCreateSecurity security;
    public AccountCreateRequest withSecurity(AccountCreateSecurity security) {
        this.security = security;
        return this;
    }
}