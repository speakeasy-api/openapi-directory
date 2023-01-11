package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutImagePolicyRequest {
    public PutImagePolicyHeaders headers;
    public PutImagePolicyRequest withHeaders(PutImagePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutImagePolicyRequestBody request;
    public PutImagePolicyRequest withRequest(PutImagePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}