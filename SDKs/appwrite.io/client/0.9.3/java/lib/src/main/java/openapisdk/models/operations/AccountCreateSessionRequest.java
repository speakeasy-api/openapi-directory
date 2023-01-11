package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateSessionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountCreateSessionRequestBody request;
    public AccountCreateSessionRequest withRequest(AccountCreateSessionRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountCreateSessionSecurity security;
    public AccountCreateSessionRequest withSecurity(AccountCreateSessionSecurity security) {
        this.security = security;
        return this;
    }
}