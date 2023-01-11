package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateModelRequest {
    public CreateModelPathParams pathParams;
    public CreateModelRequest withPathParams(CreateModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateModelHeaders headers;
    public CreateModelRequest withHeaders(CreateModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateModelRequestBody request;
    public CreateModelRequest withRequest(CreateModelRequestBody request) {
        this.request = request;
        return this;
    }
}