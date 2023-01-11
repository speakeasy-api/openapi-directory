package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetRequest {
    public CreateDatasetHeaders headers;
    public CreateDatasetRequest withHeaders(CreateDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDatasetRequestBody request;
    public CreateDatasetRequest withRequest(CreateDatasetRequestBody request) {
        this.request = request;
        return this;
    }
}