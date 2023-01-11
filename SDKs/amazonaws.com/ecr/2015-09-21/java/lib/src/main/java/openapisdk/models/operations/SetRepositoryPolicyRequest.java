package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetRepositoryPolicyRequest {
    public SetRepositoryPolicyHeaders headers;
    public SetRepositoryPolicyRequest withHeaders(SetRepositoryPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetRepositoryPolicyRequest request;
    public SetRepositoryPolicyRequest withRequest(openapisdk.models.shared.SetRepositoryPolicyRequest request) {
        this.request = request;
        return this;
    }
}