package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPolicyGenerationRequest {
    public StartPolicyGenerationHeaders headers;
    public StartPolicyGenerationRequest withHeaders(StartPolicyGenerationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartPolicyGenerationRequestBody request;
    public StartPolicyGenerationRequest withRequest(StartPolicyGenerationRequestBody request) {
        this.request = request;
        return this;
    }
}