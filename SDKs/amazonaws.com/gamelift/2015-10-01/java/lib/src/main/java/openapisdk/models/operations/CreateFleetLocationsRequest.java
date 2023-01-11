package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFleetLocationsRequest {
    public CreateFleetLocationsHeaders headers;
    public CreateFleetLocationsRequest withHeaders(CreateFleetLocationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFleetLocationsInput request;
    public CreateFleetLocationsRequest withRequest(openapisdk.models.shared.CreateFleetLocationsInput request) {
        this.request = request;
        return this;
    }
}