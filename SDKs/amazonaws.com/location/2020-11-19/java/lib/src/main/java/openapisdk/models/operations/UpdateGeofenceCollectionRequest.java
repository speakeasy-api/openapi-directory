package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGeofenceCollectionRequest {
    public UpdateGeofenceCollectionPathParams pathParams;
    public UpdateGeofenceCollectionRequest withPathParams(UpdateGeofenceCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGeofenceCollectionHeaders headers;
    public UpdateGeofenceCollectionRequest withHeaders(UpdateGeofenceCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGeofenceCollectionRequestBody request;
    public UpdateGeofenceCollectionRequest withRequest(UpdateGeofenceCollectionRequestBody request) {
        this.request = request;
        return this;
    }
}