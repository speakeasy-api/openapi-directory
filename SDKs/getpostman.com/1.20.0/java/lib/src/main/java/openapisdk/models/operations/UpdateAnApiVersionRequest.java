package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnApiVersionRequest {
    public UpdateAnApiVersionPathParams pathParams;
    public UpdateAnApiVersionRequest withPathParams(UpdateAnApiVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAnApiVersionRequestBody request;
    public UpdateAnApiVersionRequest withRequest(UpdateAnApiVersionRequestBody request) {
        this.request = request;
        return this;
    }
}