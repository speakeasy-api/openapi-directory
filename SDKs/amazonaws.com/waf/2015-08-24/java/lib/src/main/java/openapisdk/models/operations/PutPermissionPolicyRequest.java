package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPermissionPolicyRequest {
    public PutPermissionPolicyHeaders headers;
    public PutPermissionPolicyRequest withHeaders(PutPermissionPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPermissionPolicyRequest request;
    public PutPermissionPolicyRequest withRequest(openapisdk.models.shared.PutPermissionPolicyRequest request) {
        this.request = request;
        return this;
    }
}