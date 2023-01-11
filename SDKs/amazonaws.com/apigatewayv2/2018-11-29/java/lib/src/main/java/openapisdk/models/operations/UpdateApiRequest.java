package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiRequest {
    public UpdateApiPathParams pathParams;
    public UpdateApiRequest withPathParams(UpdateApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateApiHeaders headers;
    public UpdateApiRequest withHeaders(UpdateApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateApiRequestBody request;
    public UpdateApiRequest withRequest(UpdateApiRequestBody request) {
        this.request = request;
        return this;
    }
}