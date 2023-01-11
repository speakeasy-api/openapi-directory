package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFleetRequest {
    public CreateFleetHeaders headers;
    public CreateFleetRequest withHeaders(CreateFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFleetRequestBody request;
    public CreateFleetRequest withRequest(CreateFleetRequestBody request) {
        this.request = request;
        return this;
    }
}