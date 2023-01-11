package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSharedDirectoriesRequest {
    public DescribeSharedDirectoriesHeaders headers;
    public DescribeSharedDirectoriesRequest withHeaders(DescribeSharedDirectoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSharedDirectoriesRequest request;
    public DescribeSharedDirectoriesRequest withRequest(openapisdk.models.shared.DescribeSharedDirectoriesRequest request) {
        this.request = request;
        return this;
    }
}