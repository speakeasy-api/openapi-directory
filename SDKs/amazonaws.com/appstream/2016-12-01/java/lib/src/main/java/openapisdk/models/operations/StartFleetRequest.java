package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartFleetRequest {
    public StartFleetHeaders headers;
    public StartFleetRequest withHeaders(StartFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartFleetRequest request;
    public StartFleetRequest withRequest(openapisdk.models.shared.StartFleetRequest request) {
        this.request = request;
        return this;
    }
}