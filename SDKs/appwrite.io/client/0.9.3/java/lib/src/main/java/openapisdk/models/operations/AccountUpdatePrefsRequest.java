package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountUpdatePrefsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AccountUpdatePrefsRequestBody request;
    public AccountUpdatePrefsRequest withRequest(AccountUpdatePrefsRequestBody request) {
        this.request = request;
        return this;
    }
    public AccountUpdatePrefsSecurity security;
    public AccountUpdatePrefsRequest withSecurity(AccountUpdatePrefsSecurity security) {
        this.security = security;
        return this;
    }
}