package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutContainerRecipePolicyRequest {
    public PutContainerRecipePolicyHeaders headers;
    public PutContainerRecipePolicyRequest withHeaders(PutContainerRecipePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutContainerRecipePolicyRequestBody request;
    public PutContainerRecipePolicyRequest withRequest(PutContainerRecipePolicyRequestBody request) {
        this.request = request;
        return this;
    }
}