package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcePolicyRequest {
    public DeleteResourcePolicyHeaders headers;
    public DeleteResourcePolicyRequest withHeaders(DeleteResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteResourcePolicyRequestBody request;
    public DeleteResourcePolicyRequest withRequest(DeleteResourcePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}