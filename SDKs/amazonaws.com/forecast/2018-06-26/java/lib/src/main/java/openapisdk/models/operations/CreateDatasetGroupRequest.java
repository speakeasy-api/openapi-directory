package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetGroupRequest {
    public CreateDatasetGroupHeaders headers;
    public CreateDatasetGroupRequest withHeaders(CreateDatasetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDatasetGroupRequest request;
    public CreateDatasetGroupRequest withRequest(openapisdk.models.shared.CreateDatasetGroupRequest request) {
        this.request = request;
        return this;
    }
}