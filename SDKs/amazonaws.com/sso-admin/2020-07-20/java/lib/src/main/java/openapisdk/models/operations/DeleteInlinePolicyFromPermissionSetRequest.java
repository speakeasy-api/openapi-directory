package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInlinePolicyFromPermissionSetRequest {
    public DeleteInlinePolicyFromPermissionSetHeaders headers;
    public DeleteInlinePolicyFromPermissionSetRequest withHeaders(DeleteInlinePolicyFromPermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteInlinePolicyFromPermissionSetRequest request;
    public DeleteInlinePolicyFromPermissionSetRequest withRequest(openapisdk.models.shared.DeleteInlinePolicyFromPermissionSetRequest request) {
        this.request = request;
        return this;
    }
}