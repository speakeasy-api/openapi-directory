package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryPolicyRequest {
    public GetRepositoryPolicyHeaders headers;
    public GetRepositoryPolicyRequest withHeaders(GetRepositoryPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRepositoryPolicyRequest request;
    public GetRepositoryPolicyRequest withRequest(openapisdk.models.shared.GetRepositoryPolicyRequest request) {
        this.request = request;
        return this;
    }
}