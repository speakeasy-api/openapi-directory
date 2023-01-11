package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachManagedPolicyFromPermissionSetRequest {
    public DetachManagedPolicyFromPermissionSetHeaders headers;
    public DetachManagedPolicyFromPermissionSetRequest withHeaders(DetachManagedPolicyFromPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetachManagedPolicyFromPermissionSetRequest request;
    public DetachManagedPolicyFromPermissionSetRequest withRequest(openapisdk.models.shared.DetachManagedPolicyFromPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}