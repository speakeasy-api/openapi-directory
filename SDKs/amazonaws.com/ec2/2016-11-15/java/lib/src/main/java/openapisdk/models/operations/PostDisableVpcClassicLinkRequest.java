package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableVpcClassicLinkRequest {
    public PostDisableVpcClassicLinkQueryParams queryParams;
    public PostDisableVpcClassicLinkRequest withQueryParams(PostDisableVpcClassicLinkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableVpcClassicLinkHeaders headers;
    public PostDisableVpcClassicLinkRequest withHeaders(PostDisableVpcClassicLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableVpcClassicLinkRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}