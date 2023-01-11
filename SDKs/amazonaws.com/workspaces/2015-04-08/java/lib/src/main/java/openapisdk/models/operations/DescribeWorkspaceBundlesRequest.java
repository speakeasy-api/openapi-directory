package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspaceBundlesRequest {
    public DescribeWorkspaceBundlesQueryParams queryParams;
    public DescribeWorkspaceBundlesRequest withQueryParams(DescribeWorkspaceBundlesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeWorkspaceBundlesHeaders headers;
    public DescribeWorkspaceBundlesRequest withHeaders(DescribeWorkspaceBundlesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkspaceBundlesRequest request;
    public DescribeWorkspaceBundlesRequest withRequest(openapisdk.models.shared.DescribeWorkspaceBundlesRequest request) {
        this.request = request;
        return this;
    }
}