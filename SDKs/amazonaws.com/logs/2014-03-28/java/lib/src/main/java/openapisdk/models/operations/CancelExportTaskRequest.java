package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelExportTaskRequest {
    public CancelExportTaskHeaders headers;
    public CancelExportTaskRequest withHeaders(CancelExportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelExportTaskRequest request;
    public CancelExportTaskRequest withRequest(openapisdk.models.shared.CancelExportTaskRequest request) {
        this.request = request;
        return this;
    }
}