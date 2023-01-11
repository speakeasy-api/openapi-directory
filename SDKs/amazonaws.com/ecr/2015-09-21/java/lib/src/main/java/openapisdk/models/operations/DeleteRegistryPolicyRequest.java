package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRegistryPolicyRequest {
    public DeleteRegistryPolicyHeaders headers;
    public DeleteRegistryPolicyRequest withHeaders(DeleteRegistryPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DeleteRegistryPolicyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}