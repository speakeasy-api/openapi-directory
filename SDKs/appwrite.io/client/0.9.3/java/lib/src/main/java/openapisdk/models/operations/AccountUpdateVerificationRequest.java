package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountUpdateVerificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountUpdateVerificationRequestBody request;
    public AccountUpdateVerificationRequest withRequest(AccountUpdateVerificationRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountUpdateVerificationSecurity security;
    public AccountUpdateVerificationRequest withSecurity(AccountUpdateVerificationSecurity security) {
        this.security = security;
        return this;
    }
}