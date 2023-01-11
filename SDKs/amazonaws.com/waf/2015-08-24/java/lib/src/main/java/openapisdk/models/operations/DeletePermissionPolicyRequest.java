package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionPolicyRequest {
    public DeletePermissionPolicyHeaders headers;
    public DeletePermissionPolicyRequest withHeaders(DeletePermissionPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePermissionPolicyRequest request;
    public DeletePermissionPolicyRequest withRequest(openapisdk.models.shared.DeletePermissionPolicyRequest request) {
        this.request = request;
        return this;
    }
}