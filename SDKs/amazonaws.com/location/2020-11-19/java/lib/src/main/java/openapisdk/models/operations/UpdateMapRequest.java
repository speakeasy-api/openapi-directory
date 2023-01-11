package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMapRequest {
    public UpdateMapPathParams pathParams;
    public UpdateMapRequest withPathParams(UpdateMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateMapHeaders headers;
    public UpdateMapRequest withHeaders(UpdateMapHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMapRequestBody request;
    public UpdateMapRequest withRequest(UpdateMapRequestBody request) {
        this.request = request;
        return this;
    }
}