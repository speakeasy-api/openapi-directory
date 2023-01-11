package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetContentRequest {
    public CreateDatasetContentPathParams pathParams;
    public CreateDatasetContentRequest withPathParams(CreateDatasetContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateDatasetContentHeaders headers;
    public CreateDatasetContentRequest withHeaders(CreateDatasetContentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDatasetContentRequestBody request;
    public CreateDatasetContentRequest withRequest(CreateDatasetContentRequestBody request) {
        this.request = request;
        return this;
    }
}