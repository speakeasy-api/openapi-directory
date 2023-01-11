package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccessPolicyRequest {
    public UpdateAccessPolicyPathParams pathParams;
    public UpdateAccessPolicyRequest withPathParams(UpdateAccessPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAccessPolicyHeaders headers;
    public UpdateAccessPolicyRequest withHeaders(UpdateAccessPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAccessPolicyRequestBody request;
    public UpdateAccessPolicyRequest withRequest(UpdateAccessPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}