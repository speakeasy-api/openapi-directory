package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePermissionSetProvisioningStatusRequest {
    public DescribePermissionSetProvisioningStatusHeaders headers;
    public DescribePermissionSetProvisioningStatusRequest withHeaders(DescribePermissionSetProvisioningStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePermissionSetProvisioningStatusRequest request;
    public DescribePermissionSetProvisioningStatusRequest withRequest(openapisdk.models.shared.DescribePermissionSetProvisioningStatusRequest request) {
        this.request = request;
        return this;
    }
}