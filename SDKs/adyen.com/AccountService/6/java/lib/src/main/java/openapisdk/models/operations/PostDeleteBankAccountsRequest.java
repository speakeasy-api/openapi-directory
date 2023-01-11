package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteBankAccountsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDeleteBankAccountsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDeleteBankAccountsSecurity security;
    public PostDeleteBankAccountsRequest withSecurity(PostDeleteBankAccountsSecurity security) {
        this.security = security;
        return this;
    }
}