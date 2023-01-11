package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRetentionPolicyRequest {
    public DeleteRetentionPolicyHeaders headers;
    public DeleteRetentionPolicyRequest withHeaders(DeleteRetentionPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRetentionPolicyRequest request;
    public DeleteRetentionPolicyRequest withRequest(openapisdk.models.shared.DeleteRetentionPolicyRequest request) {
        this.request = request;
        return this;
    }
}