package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScheduledInstancesRequest {
    public PostDescribeScheduledInstancesQueryParams queryParams;
    public PostDescribeScheduledInstancesRequest withQueryParams(PostDescribeScheduledInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeScheduledInstancesHeaders headers;
    public PostDescribeScheduledInstancesRequest withHeaders(PostDescribeScheduledInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeScheduledInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}