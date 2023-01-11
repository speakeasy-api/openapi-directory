package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAvailabilityZonesRequest {
    public PostDescribeAvailabilityZonesQueryParams queryParams;
    public PostDescribeAvailabilityZonesRequest withQueryParams(PostDescribeAvailabilityZonesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAvailabilityZonesHeaders headers;
    public PostDescribeAvailabilityZonesRequest withHeaders(PostDescribeAvailabilityZonesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAvailabilityZonesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}