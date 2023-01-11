package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVgwRoutePropagationRequest {
    public PostEnableVgwRoutePropagationQueryParams queryParams;
    public PostEnableVgwRoutePropagationRequest withQueryParams(PostEnableVgwRoutePropagationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableVgwRoutePropagationHeaders headers;
    public PostEnableVgwRoutePropagationRequest withHeaders(PostEnableVgwRoutePropagationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableVgwRoutePropagationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}