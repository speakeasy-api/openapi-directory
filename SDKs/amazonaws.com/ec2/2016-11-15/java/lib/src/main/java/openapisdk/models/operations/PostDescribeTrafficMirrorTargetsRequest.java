package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrafficMirrorTargetsRequest {
    public PostDescribeTrafficMirrorTargetsQueryParams queryParams;
    public PostDescribeTrafficMirrorTargetsRequest withQueryParams(PostDescribeTrafficMirrorTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTrafficMirrorTargetsHeaders headers;
    public PostDescribeTrafficMirrorTargetsRequest withHeaders(PostDescribeTrafficMirrorTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTrafficMirrorTargetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}