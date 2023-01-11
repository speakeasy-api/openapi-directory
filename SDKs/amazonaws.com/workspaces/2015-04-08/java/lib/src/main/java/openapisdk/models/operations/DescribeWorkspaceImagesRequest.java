package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspaceImagesRequest {
    public DescribeWorkspaceImagesHeaders headers;
    public DescribeWorkspaceImagesRequest withHeaders(DescribeWorkspaceImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkspaceImagesRequest request;
    public DescribeWorkspaceImagesRequest withRequest(openapisdk.models.shared.DescribeWorkspaceImagesRequest request) {
        this.request = request;
        return this;
    }
}