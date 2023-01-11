package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmailIdentityPolicyRequest {
    public CreateEmailIdentityPolicyPathParams pathParams;
    public CreateEmailIdentityPolicyRequest withPathParams(CreateEmailIdentityPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateEmailIdentityPolicyHeaders headers;
    public CreateEmailIdentityPolicyRequest withHeaders(CreateEmailIdentityPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEmailIdentityPolicyRequestBody request;
    public CreateEmailIdentityPolicyRequest withRequest(CreateEmailIdentityPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}