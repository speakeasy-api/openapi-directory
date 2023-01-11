package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspacesRequest {
    public DescribeWorkspacesQueryParams queryParams;
    public DescribeWorkspacesRequest withQueryParams(DescribeWorkspacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeWorkspacesHeaders headers;
    public DescribeWorkspacesRequest withHeaders(DescribeWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkspacesRequest request;
    public DescribeWorkspacesRequest withRequest(openapisdk.models.shared.DescribeWorkspacesRequest request) {
        this.request = request;
        return this;
    }
}