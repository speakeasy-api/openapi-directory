package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetRequest {
    public UpdateFleetHeaders headers;
    public UpdateFleetRequest withHeaders(UpdateFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFleetRequest request;
    public UpdateFleetRequest withRequest(openapisdk.models.shared.UpdateFleetRequest request) {
        this.request = request;
        return this;
    }
}