package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImportJobRequest {
    public CreateImportJobHeaders headers;
    public CreateImportJobRequest withHeaders(CreateImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateImportJobRequestBody request;
    public CreateImportJobRequest withRequest(CreateImportJobRequestBody request) {
        this.request = request;
        return this;
    }
}