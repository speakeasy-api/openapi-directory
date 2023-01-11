package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeQueriesRequest {
    public DescribeQueriesHeaders headers;
    public DescribeQueriesRequest withHeaders(DescribeQueriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeQueriesRequest request;
    public DescribeQueriesRequest withRequest(openapisdk.models.shared.DescribeQueriesRequest request) {
        this.request = request;
        return this;
    }
}