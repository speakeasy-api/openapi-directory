package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeyPolicyRequest {
    public GetKeyPolicyHeaders headers;
    public GetKeyPolicyRequest withHeaders(GetKeyPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetKeyPolicyRequest request;
    public GetKeyPolicyRequest withRequest(openapisdk.models.shared.GetKeyPolicyRequest request) {
        this.request = request;
        return this;
    }
}