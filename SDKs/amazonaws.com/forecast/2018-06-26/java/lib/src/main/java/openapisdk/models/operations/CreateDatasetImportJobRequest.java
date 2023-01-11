package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetImportJobRequest {
    public CreateDatasetImportJobHeaders headers;
    public CreateDatasetImportJobRequest withHeaders(CreateDatasetImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDatasetImportJobRequest request;
    public CreateDatasetImportJobRequest withRequest(openapisdk.models.shared.CreateDatasetImportJobRequest request) {
        this.request = request;
        return this;
    }
}