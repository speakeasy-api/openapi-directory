package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTypeRequest {
    public UpdateTypePathParams pathParams;
    public UpdateTypeRequest withPathParams(UpdateTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTypeHeaders headers;
    public UpdateTypeRequest withHeaders(UpdateTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateTypeRequestBody request;
    public UpdateTypeRequest withRequest(UpdateTypeRequestBody request) {
        this.request = request;
        return this;
    }
}