package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOrdersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostOrdersOrderRequestV2 request;
    public PostOrdersRequest withRequest(PostOrdersOrderRequestV2 request) {
        this.request = request;
        return this;
    }
    public PostOrdersSecurity security;
    public PostOrdersRequest withSecurity(PostOrdersSecurity security) {
        this.security = security;
        return this;
    }
}