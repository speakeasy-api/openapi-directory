package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachPolicyRequest {
    public AttachPolicyPathParams pathParams;
    public AttachPolicyRequest withPathParams(AttachPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AttachPolicyHeaders headers;
    public AttachPolicyRequest withHeaders(AttachPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AttachPolicyRequestBody request;
    public AttachPolicyRequest withRequest(AttachPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}