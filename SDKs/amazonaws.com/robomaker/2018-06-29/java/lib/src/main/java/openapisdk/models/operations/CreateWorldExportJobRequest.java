package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorldExportJobRequest {
    public CreateWorldExportJobHeaders headers;
    public CreateWorldExportJobRequest withHeaders(CreateWorldExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWorldExportJobRequestBody request;
    public CreateWorldExportJobRequest withRequest(CreateWorldExportJobRequestBody request) {
        this.request = request;
        return this;
    }
}