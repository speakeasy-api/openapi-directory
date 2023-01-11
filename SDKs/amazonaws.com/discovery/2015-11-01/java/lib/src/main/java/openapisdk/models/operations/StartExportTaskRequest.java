package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartExportTaskRequest {
    public StartExportTaskHeaders headers;
    public StartExportTaskRequest withHeaders(StartExportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartExportTaskRequest request;
    public StartExportTaskRequest withRequest(openapisdk.models.shared.StartExportTaskRequest request) {
        this.request = request;
        return this;
    }
}