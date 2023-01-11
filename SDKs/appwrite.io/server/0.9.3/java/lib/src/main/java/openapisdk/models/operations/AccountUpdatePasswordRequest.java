package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountUpdatePasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountUpdatePasswordRequestBody request;
    public AccountUpdatePasswordRequest withRequest(AccountUpdatePasswordRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountUpdatePasswordSecurity security;
    public AccountUpdatePasswordRequest withSecurity(AccountUpdatePasswordSecurity security) {
        this.security = security;
        return this;
    }
}