package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspaceDirectoriesRequest {
    public DescribeWorkspaceDirectoriesQueryParams queryParams;
    public DescribeWorkspaceDirectoriesRequest withQueryParams(DescribeWorkspaceDirectoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeWorkspaceDirectoriesHeaders headers;
    public DescribeWorkspaceDirectoriesRequest withHeaders(DescribeWorkspaceDirectoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkspaceDirectoriesRequest request;
    public DescribeWorkspaceDirectoriesRequest withRequest(openapisdk.models.shared.DescribeWorkspaceDirectoriesRequest request) {
        this.request = request;
        return this;
    }
}