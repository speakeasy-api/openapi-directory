package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTelemetryRecordsRequest {
    public PutTelemetryRecordsHeaders headers;
    public PutTelemetryRecordsRequest withHeaders(PutTelemetryRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutTelemetryRecordsRequestBody request;
    public PutTelemetryRecordsRequest withRequest(PutTelemetryRecordsRequestBody request) {
        this.request = request;
        return this;
    }
}