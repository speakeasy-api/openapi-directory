package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetExportJobRequest {
    public CreateDatasetExportJobHeaders headers;
    public CreateDatasetExportJobRequest withHeaders(CreateDatasetExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDatasetExportJobRequest request;
    public CreateDatasetExportJobRequest withRequest(openapisdk.models.shared.CreateDatasetExportJobRequest request) {
        this.request = request;
        return this;
    }
}