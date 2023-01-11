package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGeofenceCollectionRequest {
    public CreateGeofenceCollectionHeaders headers;
    public CreateGeofenceCollectionRequest withHeaders(CreateGeofenceCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateGeofenceCollectionRequestBody request;
    public CreateGeofenceCollectionRequest withRequest(CreateGeofenceCollectionRequestBody request) {
        this.request = request;
        return this;
    }
}