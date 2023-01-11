package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFleetLocationsRequest {
    public DeleteFleetLocationsHeaders headers;
    public DeleteFleetLocationsRequest withHeaders(DeleteFleetLocationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFleetLocationsInput request;
    public DeleteFleetLocationsRequest withRequest(openapisdk.models.shared.DeleteFleetLocationsInput request) {
        this.request = request;
        return this;
    }
}