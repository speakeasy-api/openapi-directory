package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHitTypeRequest {
    public CreateHitTypeHeaders headers;
    public CreateHitTypeRequest withHeaders(CreateHitTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHitTypeRequest request;
    public CreateHitTypeRequest withRequest(openapisdk.models.shared.CreateHitTypeRequest request) {
        this.request = request;
        return this;
    }
}