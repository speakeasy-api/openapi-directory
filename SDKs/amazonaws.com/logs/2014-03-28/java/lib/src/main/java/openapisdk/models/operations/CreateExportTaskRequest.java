package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExportTaskRequest {
    public CreateExportTaskHeaders headers;
    public CreateExportTaskRequest withHeaders(CreateExportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateExportTaskRequest request;
    public CreateExportTaskRequest withRequest(openapisdk.models.shared.CreateExportTaskRequest request) {
        this.request = request;
        return this;
    }
}