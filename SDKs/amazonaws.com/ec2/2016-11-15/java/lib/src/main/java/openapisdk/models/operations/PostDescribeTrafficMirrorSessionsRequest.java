package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrafficMirrorSessionsRequest {
    public PostDescribeTrafficMirrorSessionsQueryParams queryParams;
    public PostDescribeTrafficMirrorSessionsRequest withQueryParams(PostDescribeTrafficMirrorSessionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTrafficMirrorSessionsHeaders headers;
    public PostDescribeTrafficMirrorSessionsRequest withHeaders(PostDescribeTrafficMirrorSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTrafficMirrorSessionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}