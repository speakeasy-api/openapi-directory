package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProductAsAdminRequest {
    public DescribeProductAsAdminHeaders headers;
    public DescribeProductAsAdminRequest withHeaders(DescribeProductAsAdminHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProductAsAdminInput request;
    public DescribeProductAsAdminRequest withRequest(openapisdk.models.shared.DescribeProductAsAdminInput request) {
        this.request = request;
        return this;
    }
}