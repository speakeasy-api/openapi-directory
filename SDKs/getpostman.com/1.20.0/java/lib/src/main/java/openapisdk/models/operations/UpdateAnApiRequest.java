package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnApiRequest {
    public UpdateAnApiPathParams pathParams;
    public UpdateAnApiRequest withPathParams(UpdateAnApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAnApiRequestBody request;
    public UpdateAnApiRequest withRequest(UpdateAnApiRequestBody request) {
        this.request = request;
        return this;
    }
}