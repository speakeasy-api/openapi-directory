package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVpcClassicLinkRequest {
    public PostEnableVpcClassicLinkQueryParams queryParams;
    public PostEnableVpcClassicLinkRequest withQueryParams(PostEnableVpcClassicLinkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableVpcClassicLinkHeaders headers;
    public PostEnableVpcClassicLinkRequest withHeaders(PostEnableVpcClassicLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableVpcClassicLinkRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}