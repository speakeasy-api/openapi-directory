package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopFleetRequest {
    public StopFleetHeaders headers;
    public StopFleetRequest withHeaders(StopFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopFleetRequest request;
    public StopFleetRequest withRequest(openapisdk.models.shared.StopFleetRequest request) {
        this.request = request;
        return this;
    }
}