package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachClassicLinkVpcRequest {
    public PostAttachClassicLinkVpcQueryParams queryParams;
    public PostAttachClassicLinkVpcRequest withQueryParams(PostAttachClassicLinkVpcQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachClassicLinkVpcHeaders headers;
    public PostAttachClassicLinkVpcRequest withHeaders(PostAttachClassicLinkVpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachClassicLinkVpcRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}