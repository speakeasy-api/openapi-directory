package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePermissionSetRequest {
    public DescribePermissionSetHeaders headers;
    public DescribePermissionSetRequest withHeaders(DescribePermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePermissionSetRequest request;
    public DescribePermissionSetRequest withRequest(openapisdk.models.shared.DescribePermissionSetRequest request) {
        this.request = request;
        return this;
    }
}