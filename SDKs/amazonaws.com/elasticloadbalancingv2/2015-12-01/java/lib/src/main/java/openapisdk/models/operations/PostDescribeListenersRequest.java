package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeListenersRequest {
    public PostDescribeListenersQueryParams queryParams;
    public PostDescribeListenersRequest withQueryParams(PostDescribeListenersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeListenersHeaders headers;
    public PostDescribeListenersRequest withHeaders(PostDescribeListenersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeListenersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}