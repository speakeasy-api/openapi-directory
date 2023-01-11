package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStudioRequest {
    public UpdateStudioPathParams pathParams;
    public UpdateStudioRequest withPathParams(UpdateStudioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStudioHeaders headers;
    public UpdateStudioRequest withHeaders(UpdateStudioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateStudioRequestBody request;
    public UpdateStudioRequest withRequest(UpdateStudioRequestBody request) {
        this.request = request;
        return this;
    }
}