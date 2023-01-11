package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetRequest {
    public UpdateDatasetPathParams pathParams;
    public UpdateDatasetRequest withPathParams(UpdateDatasetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDatasetHeaders headers;
    public UpdateDatasetRequest withHeaders(UpdateDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDatasetRequestBody request;
    public UpdateDatasetRequest withRequest(UpdateDatasetRequestBody request) {
        this.request = request;
        return this;
    }
}