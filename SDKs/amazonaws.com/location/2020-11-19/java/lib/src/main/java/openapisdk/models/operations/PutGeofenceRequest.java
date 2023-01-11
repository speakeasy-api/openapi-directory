package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutGeofenceRequest {
    public PutGeofencePathParams pathParams;
    public PutGeofenceRequest withPathParams(PutGeofencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutGeofenceHeaders headers;
    public PutGeofenceRequest withHeaders(PutGeofenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutGeofenceRequestBody request;
    public PutGeofenceRequest withRequest(PutGeofenceRequestBody request) {
        this.request = request;
        return this;
    }
}