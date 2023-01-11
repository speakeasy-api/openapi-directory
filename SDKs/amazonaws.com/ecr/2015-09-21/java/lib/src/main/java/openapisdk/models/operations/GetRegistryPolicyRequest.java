package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegistryPolicyRequest {
    public GetRegistryPolicyHeaders headers;
    public GetRegistryPolicyRequest withHeaders(GetRegistryPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetRegistryPolicyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}