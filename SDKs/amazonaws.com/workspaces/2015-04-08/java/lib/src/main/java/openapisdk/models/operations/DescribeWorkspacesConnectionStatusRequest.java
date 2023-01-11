package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspacesConnectionStatusRequest {
    public DescribeWorkspacesConnectionStatusHeaders headers;
    public DescribeWorkspacesConnectionStatusRequest withHeaders(DescribeWorkspacesConnectionStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkspacesConnectionStatusRequest request;
    public DescribeWorkspacesConnectionStatusRequest withRequest(openapisdk.models.shared.DescribeWorkspacesConnectionStatusRequest request) {
        this.request = request;
        return this;
    }
}