package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutContactPolicyRequest {
    public PutContactPolicyHeaders headers;
    public PutContactPolicyRequest withHeaders(PutContactPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutContactPolicyRequest request;
    public PutContactPolicyRequest withRequest(openapisdk.models.shared.PutContactPolicyRequest request) {
        this.request = request;
        return this;
    }
}