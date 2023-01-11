package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCollectionRequest {
    public DescribeCollectionHeaders headers;
    public DescribeCollectionRequest withHeaders(DescribeCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCollectionRequest request;
    public DescribeCollectionRequest withRequest(openapisdk.models.shared.DescribeCollectionRequest request) {
        this.request = request;
        return this;
    }
}