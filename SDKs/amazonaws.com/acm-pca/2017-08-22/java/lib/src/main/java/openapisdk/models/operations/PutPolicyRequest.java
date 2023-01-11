package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPolicyRequest {
    public PutPolicyHeaders headers;
    public PutPolicyRequest withHeaders(PutPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPolicyRequest request;
    public PutPolicyRequest withRequest(openapisdk.models.shared.PutPolicyRequest request) {
        this.request = request;
        return this;
    }
}