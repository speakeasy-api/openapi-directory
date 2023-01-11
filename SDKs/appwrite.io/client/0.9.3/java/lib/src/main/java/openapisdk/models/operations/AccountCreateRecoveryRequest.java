package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountCreateRecoveryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountCreateRecoveryRequestBody request;
    public AccountCreateRecoveryRequest withRequest(AccountCreateRecoveryRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountCreateRecoverySecurity security;
    public AccountCreateRecoveryRequest withSecurity(AccountCreateRecoverySecurity security) {
        this.security = security;
        return this;
    }
}