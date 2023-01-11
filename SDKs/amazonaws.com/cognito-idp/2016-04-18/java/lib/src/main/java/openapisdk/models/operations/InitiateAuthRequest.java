package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateAuthRequest {
    public InitiateAuthHeaders headers;
    public InitiateAuthRequest withHeaders(InitiateAuthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InitiateAuthRequest request;
    public InitiateAuthRequest withRequest(openapisdk.models.shared.InitiateAuthRequest request) {
        this.request = request;
        return this;
    }
}