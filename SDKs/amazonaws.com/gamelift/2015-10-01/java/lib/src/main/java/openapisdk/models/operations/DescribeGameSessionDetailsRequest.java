package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameSessionDetailsRequest {
    public DescribeGameSessionDetailsQueryParams queryParams;
    public DescribeGameSessionDetailsRequest withQueryParams(DescribeGameSessionDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeGameSessionDetailsHeaders headers;
    public DescribeGameSessionDetailsRequest withHeaders(DescribeGameSessionDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGameSessionDetailsInput request;
    public DescribeGameSessionDetailsRequest withRequest(openapisdk.models.shared.DescribeGameSessionDetailsInput request) {
        this.request = request;
        return this;
    }
}