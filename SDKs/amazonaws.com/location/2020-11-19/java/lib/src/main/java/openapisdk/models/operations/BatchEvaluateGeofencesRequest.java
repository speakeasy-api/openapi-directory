package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchEvaluateGeofencesRequest {
    public BatchEvaluateGeofencesPathParams pathParams;
    public BatchEvaluateGeofencesRequest withPathParams(BatchEvaluateGeofencesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchEvaluateGeofencesHeaders headers;
    public BatchEvaluateGeofencesRequest withHeaders(BatchEvaluateGeofencesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchEvaluateGeofencesRequestBody request;
    public BatchEvaluateGeofencesRequest withRequest(BatchEvaluateGeofencesRequestBody request) {
        this.request = request;
        return this;
    }
}