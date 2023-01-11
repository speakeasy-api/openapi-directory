package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRefundNotPaidOutTransfersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostRefundNotPaidOutTransfersRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostRefundNotPaidOutTransfersSecurity security;
    public PostRefundNotPaidOutTransfersRequest withSecurity(PostRefundNotPaidOutTransfersSecurity security) {
        this.security = security;
        return this;
    }
}