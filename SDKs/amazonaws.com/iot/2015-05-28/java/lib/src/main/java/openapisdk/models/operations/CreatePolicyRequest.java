package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePolicyRequest {
    public CreatePolicyPathParams pathParams;
    public CreatePolicyRequest withPathParams(CreatePolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreatePolicyHeaders headers;
    public CreatePolicyRequest withHeaders(CreatePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePolicyRequestBody request;
    public CreatePolicyRequest withRequest(CreatePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}