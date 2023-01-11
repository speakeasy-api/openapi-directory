package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRefundFundsTransferRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostRefundFundsTransferRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostRefundFundsTransferSecurity security;
    public PostRefundFundsTransferRequest withSecurity(PostRefundFundsTransferSecurity security) {
        this.security = security;
        return this;
    }
}