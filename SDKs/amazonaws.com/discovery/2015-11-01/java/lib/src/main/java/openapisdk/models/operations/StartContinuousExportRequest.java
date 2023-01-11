package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartContinuousExportRequest {
    public StartContinuousExportHeaders headers;
    public StartContinuousExportRequest withHeaders(StartContinuousExportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public StartContinuousExportRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}