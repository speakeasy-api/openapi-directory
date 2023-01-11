package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeImageBuildersRequest {
    public DescribeImageBuildersHeaders headers;
    public DescribeImageBuildersRequest withHeaders(DescribeImageBuildersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeImageBuildersRequest request;
    public DescribeImageBuildersRequest withRequest(openapisdk.models.shared.DescribeImageBuildersRequest request) {
        this.request = request;
        return this;
    }
}