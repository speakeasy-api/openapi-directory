package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessPolicyRequest {
    public CreateAccessPolicyHeaders headers;
    public CreateAccessPolicyRequest withHeaders(CreateAccessPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAccessPolicyRequestBody request;
    public CreateAccessPolicyRequest withRequest(CreateAccessPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}