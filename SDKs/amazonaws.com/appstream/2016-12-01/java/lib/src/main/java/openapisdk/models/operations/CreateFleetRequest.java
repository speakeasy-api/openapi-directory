package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFleetRequest {
    public CreateFleetHeaders headers;
    public CreateFleetRequest withHeaders(CreateFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFleetRequest request;
    public CreateFleetRequest withRequest(openapisdk.models.shared.CreateFleetRequest request) {
        this.request = request;
        return this;
    }
}