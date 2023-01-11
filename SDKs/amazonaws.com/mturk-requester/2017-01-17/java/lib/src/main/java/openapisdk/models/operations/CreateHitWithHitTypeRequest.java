package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHitWithHitTypeRequest {
    public CreateHitWithHitTypeHeaders headers;
    public CreateHitWithHitTypeRequest withHeaders(CreateHitWithHitTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHitWithHitTypeRequest request;
    public CreateHitWithHitTypeRequest withRequest(openapisdk.models.shared.CreateHitWithHitTypeRequest request) {
        this.request = request;
        return this;
    }
}