package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountUpdateEmailRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountUpdateEmailRequestBody request;
    public AccountUpdateEmailRequest withRequest(AccountUpdateEmailRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountUpdateEmailSecurity security;
    public AccountUpdateEmailRequest withSecurity(AccountUpdateEmailSecurity security) {
        this.security = security;
        return this;
    }
}