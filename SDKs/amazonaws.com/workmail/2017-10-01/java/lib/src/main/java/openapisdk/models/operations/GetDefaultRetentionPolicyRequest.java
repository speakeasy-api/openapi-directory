package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDefaultRetentionPolicyRequest {
    public GetDefaultRetentionPolicyHeaders headers;
    public GetDefaultRetentionPolicyRequest withHeaders(GetDefaultRetentionPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDefaultRetentionPolicyRequest request;
    public GetDefaultRetentionPolicyRequest withRequest(openapisdk.models.shared.GetDefaultRetentionPolicyRequest request) {
        this.request = request;
        return this;
    }
}