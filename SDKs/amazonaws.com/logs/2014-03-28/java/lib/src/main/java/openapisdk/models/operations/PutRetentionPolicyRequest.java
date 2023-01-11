package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRetentionPolicyRequest {
    public PutRetentionPolicyHeaders headers;
    public PutRetentionPolicyRequest withHeaders(PutRetentionPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRetentionPolicyRequest request;
    public PutRetentionPolicyRequest withRequest(openapisdk.models.shared.PutRetentionPolicyRequest request) {
        this.request = request;
        return this;
    }
}