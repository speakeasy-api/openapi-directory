package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcClassicLinkRequest {
    public PostDescribeVpcClassicLinkQueryParams queryParams;
    public PostDescribeVpcClassicLinkRequest withQueryParams(PostDescribeVpcClassicLinkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcClassicLinkHeaders headers;
    public PostDescribeVpcClassicLinkRequest withHeaders(PostDescribeVpcClassicLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcClassicLinkRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}