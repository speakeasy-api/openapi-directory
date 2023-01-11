package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchPutGeofenceRequest {
    public BatchPutGeofencePathParams pathParams;
    public BatchPutGeofenceRequest withPathParams(BatchPutGeofencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchPutGeofenceHeaders headers;
    public BatchPutGeofenceRequest withHeaders(BatchPutGeofenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchPutGeofenceRequestBody request;
    public BatchPutGeofenceRequest withRequest(BatchPutGeofenceRequestBody request) {
        this.request = request;
        return this;
    }
}