package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEngineVersionsRequest {
    public DescribeEngineVersionsHeaders headers;
    public DescribeEngineVersionsRequest withHeaders(DescribeEngineVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEngineVersionsRequest request;
    public DescribeEngineVersionsRequest withRequest(openapisdk.models.shared.DescribeEngineVersionsRequest request) {
        this.request = request;
        return this;
    }
}