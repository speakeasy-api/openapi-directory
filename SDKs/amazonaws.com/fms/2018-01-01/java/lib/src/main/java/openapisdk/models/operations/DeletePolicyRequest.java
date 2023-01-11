package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePolicyRequest {
    public DeletePolicyHeaders headers;
    public DeletePolicyRequest withHeaders(DeletePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePolicyRequest request;
    public DeletePolicyRequest withRequest(openapisdk.models.shared.DeletePolicyRequest request) {
        this.request = request;
        return this;
    }
}