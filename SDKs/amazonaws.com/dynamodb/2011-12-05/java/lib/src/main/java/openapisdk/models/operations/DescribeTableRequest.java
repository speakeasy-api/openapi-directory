package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTableRequest {
    public DescribeTableHeaders headers;
    public DescribeTableRequest withHeaders(DescribeTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTableInput request;
    public DescribeTableRequest withRequest(openapisdk.models.shared.DescribeTableInput request) {
        this.request = request;
        return this;
    }
}