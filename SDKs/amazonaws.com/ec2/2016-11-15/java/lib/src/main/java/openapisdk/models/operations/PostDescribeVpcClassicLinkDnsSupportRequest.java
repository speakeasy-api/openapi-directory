package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcClassicLinkDnsSupportRequest {
    public PostDescribeVpcClassicLinkDnsSupportQueryParams queryParams;
    public PostDescribeVpcClassicLinkDnsSupportRequest withQueryParams(PostDescribeVpcClassicLinkDnsSupportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcClassicLinkDnsSupportHeaders headers;
    public PostDescribeVpcClassicLinkDnsSupportRequest withHeaders(PostDescribeVpcClassicLinkDnsSupportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcClassicLinkDnsSupportRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}