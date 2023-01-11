package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataSourceRequest {
    public UpdateDataSourcePathParams pathParams;
    public UpdateDataSourceRequest withPathParams(UpdateDataSourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDataSourceHeaders headers;
    public UpdateDataSourceRequest withHeaders(UpdateDataSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDataSourceRequestBody request;
    public UpdateDataSourceRequest withRequest(UpdateDataSourceRequestBody request) {
        this.request = request;
        return this;
    }
}