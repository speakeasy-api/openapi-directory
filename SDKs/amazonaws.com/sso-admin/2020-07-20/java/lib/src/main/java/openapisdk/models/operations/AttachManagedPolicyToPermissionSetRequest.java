package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachManagedPolicyToPermissionSetRequest {
    public AttachManagedPolicyToPermissionSetHeaders headers;
    public AttachManagedPolicyToPermissionSetRequest withHeaders(AttachManagedPolicyToPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttachManagedPolicyToPermissionSetRequest request;
    public AttachManagedPolicyToPermissionSetRequest withRequest(openapisdk.models.shared.AttachManagedPolicyToPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}