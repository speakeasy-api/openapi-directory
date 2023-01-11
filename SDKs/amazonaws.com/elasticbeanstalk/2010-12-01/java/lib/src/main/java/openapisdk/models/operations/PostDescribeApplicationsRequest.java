package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeApplicationsRequest {
    public PostDescribeApplicationsQueryParams queryParams;
    public PostDescribeApplicationsRequest withQueryParams(PostDescribeApplicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeApplicationsHeaders headers;
    public PostDescribeApplicationsRequest withHeaders(PostDescribeApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeApplicationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}