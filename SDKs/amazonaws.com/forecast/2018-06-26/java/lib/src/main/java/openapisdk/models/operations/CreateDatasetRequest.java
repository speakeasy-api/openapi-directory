package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetRequest {
    public CreateDatasetHeaders headers;
    public CreateDatasetRequest withHeaders(CreateDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDatasetRequest request;
    public CreateDatasetRequest withRequest(openapisdk.models.shared.CreateDatasetRequest request) {
        this.request = request;
        return this;
    }
}