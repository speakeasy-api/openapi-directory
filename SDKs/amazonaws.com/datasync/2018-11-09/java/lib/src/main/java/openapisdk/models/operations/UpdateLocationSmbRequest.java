package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLocationSmbRequest {
    public UpdateLocationSmbHeaders headers;
    public UpdateLocationSmbRequest withHeaders(UpdateLocationSmbHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLocationSmbRequest request;
    public UpdateLocationSmbRequest withRequest(openapisdk.models.shared.UpdateLocationSmbRequest request) {
        this.request = request;
        return this;
    }
}