package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatasetRequest {
    public DeleteDatasetHeaders headers;
    public DeleteDatasetRequest withHeaders(DeleteDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDatasetRequest request;
    public DeleteDatasetRequest withRequest(openapisdk.models.shared.DeleteDatasetRequest request) {
        this.request = request;
        return this;
    }
}