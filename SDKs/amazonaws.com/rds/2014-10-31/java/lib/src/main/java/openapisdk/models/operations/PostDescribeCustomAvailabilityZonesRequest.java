package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCustomAvailabilityZonesRequest {
    public PostDescribeCustomAvailabilityZonesQueryParams queryParams;
    public PostDescribeCustomAvailabilityZonesRequest withQueryParams(PostDescribeCustomAvailabilityZonesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCustomAvailabilityZonesHeaders headers;
    public PostDescribeCustomAvailabilityZonesRequest withHeaders(PostDescribeCustomAvailabilityZonesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCustomAvailabilityZonesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}