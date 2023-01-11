package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInlinePolicyForPermissionSetRequest {
    public GetInlinePolicyForPermissionSetHeaders headers;
    public GetInlinePolicyForPermissionSetRequest withHeaders(GetInlinePolicyForPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInlinePolicyForPermissionSetRequest request;
    public GetInlinePolicyForPermissionSetRequest withRequest(openapisdk.models.shared.GetInlinePolicyForPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}