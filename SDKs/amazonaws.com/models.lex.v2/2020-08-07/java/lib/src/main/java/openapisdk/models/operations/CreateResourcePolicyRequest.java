package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourcePolicyRequest {
    public CreateResourcePolicyPathParams pathParams;
    public CreateResourcePolicyRequest withPathParams(CreateResourcePolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateResourcePolicyHeaders headers;
    public CreateResourcePolicyRequest withHeaders(CreateResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateResourcePolicyRequestBody request;
    public CreateResourcePolicyRequest withRequest(CreateResourcePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}