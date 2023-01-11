package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPermissionSetProvisioningStatusRequest {
    public ListPermissionSetProvisioningStatusQueryParams queryParams;
    public ListPermissionSetProvisioningStatusRequest withQueryParams(ListPermissionSetProvisioningStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPermissionSetProvisioningStatusHeaders headers;
    public ListPermissionSetProvisioningStatusRequest withHeaders(ListPermissionSetProvisioningStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPermissionSetProvisioningStatusRequest request;
    public ListPermissionSetProvisioningStatusRequest withRequest(openapisdk.models.shared.ListPermissionSetProvisioningStatusRequest request) {
        this.request = request;
        return this;
    }
}