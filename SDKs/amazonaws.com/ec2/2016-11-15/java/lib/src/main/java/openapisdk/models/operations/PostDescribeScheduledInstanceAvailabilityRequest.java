package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScheduledInstanceAvailabilityRequest {
    public PostDescribeScheduledInstanceAvailabilityQueryParams queryParams;
    public PostDescribeScheduledInstanceAvailabilityRequest withQueryParams(PostDescribeScheduledInstanceAvailabilityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeScheduledInstanceAvailabilityHeaders headers;
    public PostDescribeScheduledInstanceAvailabilityRequest withHeaders(PostDescribeScheduledInstanceAvailabilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeScheduledInstanceAvailabilityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}