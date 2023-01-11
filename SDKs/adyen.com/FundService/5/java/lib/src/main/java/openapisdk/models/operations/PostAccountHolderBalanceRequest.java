package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountHolderBalanceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAccountHolderBalanceRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostAccountHolderBalanceSecurity security;
    public PostAccountHolderBalanceRequest withSecurity(PostAccountHolderBalanceSecurity security) {
        this.security = security;
        return this;
    }
}