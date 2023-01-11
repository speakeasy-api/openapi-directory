package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransferFundsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostTransferFundsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostTransferFundsSecurity security;
    public PostTransferFundsRequest withSecurity(PostTransferFundsSecurity security) {
        this.security = security;
        return this;
    }
}