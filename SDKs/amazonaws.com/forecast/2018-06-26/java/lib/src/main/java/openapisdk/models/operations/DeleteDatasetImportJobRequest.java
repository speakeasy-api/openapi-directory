package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatasetImportJobRequest {
    public DeleteDatasetImportJobHeaders headers;
    public DeleteDatasetImportJobRequest withHeaders(DeleteDatasetImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDatasetImportJobRequest request;
    public DeleteDatasetImportJobRequest withRequest(openapisdk.models.shared.DeleteDatasetImportJobRequest request) {
        this.request = request;
        return this;
    }
}