package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTableRequest {
    public DescribeTableHeaders headers;
    public DescribeTableRequest withHeaders(DescribeTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTableRequest request;
    public DescribeTableRequest withRequest(openapisdk.models.shared.DescribeTableRequest request) {
        this.request = request;
        return this;
    }
}