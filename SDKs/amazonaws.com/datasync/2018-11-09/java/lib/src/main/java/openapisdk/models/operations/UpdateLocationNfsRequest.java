package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLocationNfsRequest {
    public UpdateLocationNfsHeaders headers;
    public UpdateLocationNfsRequest withHeaders(UpdateLocationNfsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLocationNfsRequest request;
    public UpdateLocationNfsRequest withRequest(openapisdk.models.shared.UpdateLocationNfsRequest request) {
        this.request = request;
        return this;
    }
}