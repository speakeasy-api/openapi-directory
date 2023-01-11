package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableVgwRoutePropagationRequest {
    public PostDisableVgwRoutePropagationQueryParams queryParams;
    public PostDisableVgwRoutePropagationRequest withQueryParams(PostDisableVgwRoutePropagationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableVgwRoutePropagationHeaders headers;
    public PostDisableVgwRoutePropagationRequest withHeaders(PostDisableVgwRoutePropagationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableVgwRoutePropagationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}