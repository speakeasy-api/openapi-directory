package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransfersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostTransfersRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostTransfersSecurity security;
    public PostTransfersRequest withSecurity(PostTransfersSecurity security) {
        this.security = security;
        return this;
    }
}