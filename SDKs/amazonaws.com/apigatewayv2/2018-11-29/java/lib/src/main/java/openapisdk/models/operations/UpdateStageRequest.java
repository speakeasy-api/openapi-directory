package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStageRequest {
    public UpdateStagePathParams pathParams;
    public UpdateStageRequest withPathParams(UpdateStagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStageHeaders headers;
    public UpdateStageRequest withHeaders(UpdateStageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateStageRequestBody request;
    public UpdateStageRequest withRequest(UpdateStageRequestBody request) {
        this.request = request;
        return this;
    }
}