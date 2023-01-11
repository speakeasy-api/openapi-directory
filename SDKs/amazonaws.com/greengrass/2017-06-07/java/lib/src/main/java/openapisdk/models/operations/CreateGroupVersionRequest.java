package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupVersionRequest {
    public CreateGroupVersionPathParams pathParams;
    public CreateGroupVersionRequest withPathParams(CreateGroupVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateGroupVersionHeaders headers;
    public CreateGroupVersionRequest withHeaders(CreateGroupVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateGroupVersionRequestBody request;
    public CreateGroupVersionRequest withRequest(CreateGroupVersionRequestBody request) {
        this.request = request;
        return this;
    }
}