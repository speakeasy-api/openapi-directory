package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEventsRequest {
    public PostDescribeEventsQueryParams queryParams;
    public PostDescribeEventsRequest withQueryParams(PostDescribeEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEventsHeaders headers;
    public PostDescribeEventsRequest withHeaders(PostDescribeEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEventsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}