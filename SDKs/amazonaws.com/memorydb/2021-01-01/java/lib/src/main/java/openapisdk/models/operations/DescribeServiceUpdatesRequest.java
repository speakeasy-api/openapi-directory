package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServiceUpdatesRequest {
    public DescribeServiceUpdatesHeaders headers;
    public DescribeServiceUpdatesRequest withHeaders(DescribeServiceUpdatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServiceUpdatesRequest request;
    public DescribeServiceUpdatesRequest withRequest(openapisdk.models.shared.DescribeServiceUpdatesRequest request) {
        this.request = request;
        return this;
    }
}