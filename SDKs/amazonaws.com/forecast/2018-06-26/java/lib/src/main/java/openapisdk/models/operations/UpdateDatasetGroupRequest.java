package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetGroupRequest {
    public UpdateDatasetGroupHeaders headers;
    public UpdateDatasetGroupRequest withHeaders(UpdateDatasetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDatasetGroupRequest request;
    public UpdateDatasetGroupRequest withRequest(openapisdk.models.shared.UpdateDatasetGroupRequest request) {
        this.request = request;
        return this;
    }
}