package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartImportTaskRequest {
    public StartImportTaskHeaders headers;
    public StartImportTaskRequest withHeaders(StartImportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartImportTaskRequest request;
    public StartImportTaskRequest withRequest(openapisdk.models.shared.StartImportTaskRequest request) {
        this.request = request;
        return this;
    }
}