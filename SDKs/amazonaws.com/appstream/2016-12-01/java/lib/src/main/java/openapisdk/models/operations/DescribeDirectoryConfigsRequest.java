package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDirectoryConfigsRequest {
    public DescribeDirectoryConfigsHeaders headers;
    public DescribeDirectoryConfigsRequest withHeaders(DescribeDirectoryConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDirectoryConfigsRequest request;
    public DescribeDirectoryConfigsRequest withRequest(openapisdk.models.shared.DescribeDirectoryConfigsRequest request) {
        this.request = request;
        return this;
    }
}