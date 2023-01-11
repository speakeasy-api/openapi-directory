package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopContinuousExportRequest {
    public StopContinuousExportHeaders headers;
    public StopContinuousExportRequest withHeaders(StopContinuousExportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopContinuousExportRequest request;
    public StopContinuousExportRequest withRequest(openapisdk.models.shared.StopContinuousExportRequest request) {
        this.request = request;
        return this;
    }
}