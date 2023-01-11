package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateControlRequest {
    public UpdateControlPathParams pathParams;
    public UpdateControlRequest withPathParams(UpdateControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateControlHeaders headers;
    public UpdateControlRequest withHeaders(UpdateControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateControlRequestBody request;
    public UpdateControlRequest withRequest(UpdateControlRequestBody request) {
        this.request = request;
        return this;
    }
}