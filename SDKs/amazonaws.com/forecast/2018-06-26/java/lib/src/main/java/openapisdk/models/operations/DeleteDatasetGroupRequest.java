package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatasetGroupRequest {
    public DeleteDatasetGroupHeaders headers;
    public DeleteDatasetGroupRequest withHeaders(DeleteDatasetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDatasetGroupRequest request;
    public DeleteDatasetGroupRequest withRequest(openapisdk.models.shared.DeleteDatasetGroupRequest request) {
        this.request = request;
        return this;
    }
}