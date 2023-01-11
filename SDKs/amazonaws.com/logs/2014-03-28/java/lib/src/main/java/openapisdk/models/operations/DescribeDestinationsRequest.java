package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDestinationsRequest {
    public DescribeDestinationsQueryParams queryParams;
    public DescribeDestinationsRequest withQueryParams(DescribeDestinationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeDestinationsHeaders headers;
    public DescribeDestinationsRequest withHeaders(DescribeDestinationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDestinationsRequest request;
    public DescribeDestinationsRequest withRequest(openapisdk.models.shared.DescribeDestinationsRequest request) {
        this.request = request;
        return this;
    }
}