package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspaceImagePermissionsRequest {
    public DescribeWorkspaceImagePermissionsHeaders headers;
    public DescribeWorkspaceImagePermissionsRequest withHeaders(DescribeWorkspaceImagePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkspaceImagePermissionsRequest request;
    public DescribeWorkspaceImagePermissionsRequest withRequest(openapisdk.models.shared.DescribeWorkspaceImagePermissionsRequest request) {
        this.request = request;
        return this;
    }
}