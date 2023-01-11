package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteGeofenceRequest {
    public BatchDeleteGeofencePathParams pathParams;
    public BatchDeleteGeofenceRequest withPathParams(BatchDeleteGeofencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchDeleteGeofenceHeaders headers;
    public BatchDeleteGeofenceRequest withHeaders(BatchDeleteGeofenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDeleteGeofenceRequestBody request;
    public BatchDeleteGeofenceRequest withRequest(BatchDeleteGeofenceRequestBody request) {
        this.request = request;
        return this;
    }
}