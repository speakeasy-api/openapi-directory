package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExportRequest {
    public CreateExportHeaders headers;
    public CreateExportRequest withHeaders(CreateExportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateExportRequestBody request;
    public CreateExportRequest withRequest(CreateExportRequestBody request) {
        this.request = request;
        return this;
    }
}