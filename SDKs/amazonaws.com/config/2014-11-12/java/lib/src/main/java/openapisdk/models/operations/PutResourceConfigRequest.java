package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResourceConfigRequest {
    public PutResourceConfigHeaders headers;
    public PutResourceConfigRequest withHeaders(PutResourceConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutResourceConfigRequest request;
    public PutResourceConfigRequest withRequest(openapisdk.models.shared.PutResourceConfigRequest request) {
        this.request = request;
        return this;
    }
}