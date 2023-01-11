package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoryPolicyRequest {
    public DeleteRepositoryPolicyHeaders headers;
    public DeleteRepositoryPolicyRequest withHeaders(DeleteRepositoryPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRepositoryPolicyRequest request;
    public DeleteRepositoryPolicyRequest withRequest(openapisdk.models.shared.DeleteRepositoryPolicyRequest request) {
        this.request = request;
        return this;
    }
}