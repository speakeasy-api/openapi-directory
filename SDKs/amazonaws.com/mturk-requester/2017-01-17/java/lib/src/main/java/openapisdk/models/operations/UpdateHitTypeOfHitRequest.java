package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHitTypeOfHitRequest {
    public UpdateHitTypeOfHitHeaders headers;
    public UpdateHitTypeOfHitRequest withHeaders(UpdateHitTypeOfHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateHitTypeOfHitRequest request;
    public UpdateHitTypeOfHitRequest withRequest(openapisdk.models.shared.UpdateHitTypeOfHitRequest request) {
        this.request = request;
        return this;
    }
}