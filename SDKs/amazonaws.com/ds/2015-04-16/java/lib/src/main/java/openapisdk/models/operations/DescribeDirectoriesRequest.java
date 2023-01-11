package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDirectoriesRequest {
    public DescribeDirectoriesHeaders headers;
    public DescribeDirectoriesRequest withHeaders(DescribeDirectoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDirectoriesRequest request;
    public DescribeDirectoriesRequest withRequest(openapisdk.models.shared.DescribeDirectoriesRequest request) {
        this.request = request;
        return this;
    }
}