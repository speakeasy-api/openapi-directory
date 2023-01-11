package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableImageDeprecationRequest {
    public PostDisableImageDeprecationQueryParams queryParams;
    public PostDisableImageDeprecationRequest withQueryParams(PostDisableImageDeprecationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableImageDeprecationHeaders headers;
    public PostDisableImageDeprecationRequest withHeaders(PostDisableImageDeprecationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableImageDeprecationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}