package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountUpdateRecoveryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountUpdateRecoveryRequestBody request;
    public AccountUpdateRecoveryRequest withRequest(AccountUpdateRecoveryRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountUpdateRecoverySecurity security;
    public AccountUpdateRecoveryRequest withSecurity(AccountUpdateRecoverySecurity security) {
        this.security = security;
        return this;
    }
}