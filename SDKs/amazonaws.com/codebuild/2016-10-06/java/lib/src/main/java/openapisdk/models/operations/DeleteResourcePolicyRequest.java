package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcePolicyRequest {
    public DeleteResourcePolicyHeaders headers;
    public DeleteResourcePolicyRequest withHeaders(DeleteResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResourcePolicyInput request;
    public DeleteResourcePolicyRequest withRequest(openapisdk.models.shared.DeleteResourcePolicyInput request) {
        this.request = request;
        return this;
    }
}