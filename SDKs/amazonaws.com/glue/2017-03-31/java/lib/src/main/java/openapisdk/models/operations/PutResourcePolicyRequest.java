package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResourcePolicyRequest {
    public PutResourcePolicyHeaders headers;
    public PutResourcePolicyRequest withHeaders(PutResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutResourcePolicyRequest request;
    public PutResourcePolicyRequest withRequest(openapisdk.models.shared.PutResourcePolicyRequest request) {
        this.request = request;
        return this;
    }
}