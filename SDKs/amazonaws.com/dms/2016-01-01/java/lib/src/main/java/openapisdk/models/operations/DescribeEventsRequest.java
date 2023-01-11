package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventsRequest {
    public DescribeEventsQueryParams queryParams;
    public DescribeEventsRequest withQueryParams(DescribeEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEventsHeaders headers;
    public DescribeEventsRequest withHeaders(DescribeEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventsMessage request;
    public DescribeEventsRequest withRequest(openapisdk.models.shared.DescribeEventsMessage request) {
        this.request = request;
        return this;
    }
}