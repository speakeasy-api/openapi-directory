package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHitRequest {
    public CreateHitHeaders headers;
    public CreateHitRequest withHeaders(CreateHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHitRequest request;
    public CreateHitRequest withRequest(openapisdk.models.shared.CreateHitRequest request) {
        this.request = request;
        return this;
    }
}