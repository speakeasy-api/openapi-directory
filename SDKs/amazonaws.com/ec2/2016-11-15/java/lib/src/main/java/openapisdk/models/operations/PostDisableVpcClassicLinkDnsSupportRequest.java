package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableVpcClassicLinkDnsSupportRequest {
    public PostDisableVpcClassicLinkDnsSupportQueryParams queryParams;
    public PostDisableVpcClassicLinkDnsSupportRequest withQueryParams(PostDisableVpcClassicLinkDnsSupportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableVpcClassicLinkDnsSupportHeaders headers;
    public PostDisableVpcClassicLinkDnsSupportRequest withHeaders(PostDisableVpcClassicLinkDnsSupportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableVpcClassicLinkDnsSupportRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}