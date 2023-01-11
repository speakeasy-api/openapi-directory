package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAvailabilityOptionsRequest {
    public PostDescribeAvailabilityOptionsQueryParams queryParams;
    public PostDescribeAvailabilityOptionsRequest withQueryParams(PostDescribeAvailabilityOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAvailabilityOptionsHeaders headers;
    public PostDescribeAvailabilityOptionsRequest withHeaders(PostDescribeAvailabilityOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAvailabilityOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}