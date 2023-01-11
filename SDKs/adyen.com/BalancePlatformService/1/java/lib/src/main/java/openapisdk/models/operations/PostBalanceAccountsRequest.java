package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBalanceAccountsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostBalanceAccountsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostBalanceAccountsSecurity security;
    public PostBalanceAccountsRequest withSecurity(PostBalanceAccountsSecurity security) {
        this.security = security;
        return this;
    }
}