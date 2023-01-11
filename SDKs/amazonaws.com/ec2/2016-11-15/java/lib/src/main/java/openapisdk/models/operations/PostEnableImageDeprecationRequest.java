package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableImageDeprecationRequest {
    public PostEnableImageDeprecationQueryParams queryParams;
    public PostEnableImageDeprecationRequest withQueryParams(PostEnableImageDeprecationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableImageDeprecationHeaders headers;
    public PostEnableImageDeprecationRequest withHeaders(PostEnableImageDeprecationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableImageDeprecationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}