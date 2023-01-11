package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVpcClassicLinkDnsSupportRequest {
    public PostEnableVpcClassicLinkDnsSupportQueryParams queryParams;
    public PostEnableVpcClassicLinkDnsSupportRequest withQueryParams(PostEnableVpcClassicLinkDnsSupportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableVpcClassicLinkDnsSupportHeaders headers;
    public PostEnableVpcClassicLinkDnsSupportRequest withHeaders(PostEnableVpcClassicLinkDnsSupportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableVpcClassicLinkDnsSupportRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}