package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionPolicyRequest {
    public GetPermissionPolicyHeaders headers;
    public GetPermissionPolicyRequest withHeaders(GetPermissionPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPermissionPolicyRequest request;
    public GetPermissionPolicyRequest withRequest(openapisdk.models.shared.GetPermissionPolicyRequest request) {
        this.request = request;
        return this;
    }
}