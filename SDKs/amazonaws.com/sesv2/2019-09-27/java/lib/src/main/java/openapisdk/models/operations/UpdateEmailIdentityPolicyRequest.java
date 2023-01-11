package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailIdentityPolicyRequest {
    public UpdateEmailIdentityPolicyPathParams pathParams;
    public UpdateEmailIdentityPolicyRequest withPathParams(UpdateEmailIdentityPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateEmailIdentityPolicyHeaders headers;
    public UpdateEmailIdentityPolicyRequest withHeaders(UpdateEmailIdentityPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEmailIdentityPolicyRequestBody request;
    public UpdateEmailIdentityPolicyRequest withRequest(UpdateEmailIdentityPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}