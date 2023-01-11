package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExpirationForHitRequest {
    public UpdateExpirationForHitHeaders headers;
    public UpdateExpirationForHitRequest withHeaders(UpdateExpirationForHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateExpirationForHitRequest request;
    public UpdateExpirationForHitRequest withRequest(openapisdk.models.shared.UpdateExpirationForHitRequest request) {
        this.request = request;
        return this;
    }
}