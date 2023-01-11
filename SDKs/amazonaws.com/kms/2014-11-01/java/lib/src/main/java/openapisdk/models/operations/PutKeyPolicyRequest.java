package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutKeyPolicyRequest {
    public PutKeyPolicyHeaders headers;
    public PutKeyPolicyRequest withHeaders(PutKeyPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutKeyPolicyRequest request;
    public PutKeyPolicyRequest withRequest(openapisdk.models.shared.PutKeyPolicyRequest request) {
        this.request = request;
        return this;
    }
}