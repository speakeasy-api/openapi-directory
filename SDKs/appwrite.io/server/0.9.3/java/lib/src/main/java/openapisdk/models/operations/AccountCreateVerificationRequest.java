package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateVerificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountCreateVerificationRequestBody request;
    public AccountCreateVerificationRequest withRequest(AccountCreateVerificationRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountCreateVerificationSecurity security;
    public AccountCreateVerificationRequest withSecurity(AccountCreateVerificationSecurity security) {
        this.security = security;
        return this;
    }
}