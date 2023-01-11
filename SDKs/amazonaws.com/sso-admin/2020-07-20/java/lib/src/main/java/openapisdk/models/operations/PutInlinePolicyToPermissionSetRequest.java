package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutInlinePolicyToPermissionSetRequest {
    public PutInlinePolicyToPermissionSetHeaders headers;
    public PutInlinePolicyToPermissionSetRequest withHeaders(PutInlinePolicyToPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutInlinePolicyToPermissionSetRequest request;
    public PutInlinePolicyToPermissionSetRequest withRequest(openapisdk.models.shared.PutInlinePolicyToPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}