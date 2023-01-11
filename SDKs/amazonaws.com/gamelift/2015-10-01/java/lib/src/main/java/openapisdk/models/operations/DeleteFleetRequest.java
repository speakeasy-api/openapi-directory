package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFleetRequest {
    public DeleteFleetHeaders headers;
    public DeleteFleetRequest withHeaders(DeleteFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFleetInput request;
    public DeleteFleetRequest withRequest(openapisdk.models.shared.DeleteFleetInput request) {
        this.request = request;
        return this;
    }
}