package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePermissionsRequest {
    public DescribePermissionsHeaders headers;
    public DescribePermissionsRequest withHeaders(DescribePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePermissionsRequest request;
    public DescribePermissionsRequest withRequest(openapisdk.models.shared.DescribePermissionsRequest request) {
        this.request = request;
        return this;
    }
}