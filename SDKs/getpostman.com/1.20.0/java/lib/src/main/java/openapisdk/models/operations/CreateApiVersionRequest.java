package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiVersionRequest {
    public CreateApiVersionPathParams pathParams;
    public CreateApiVersionRequest withPathParams(CreateApiVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateApiVersionRequestBody request;
    public CreateApiVersionRequest withRequest(CreateApiVersionRequestBody request) {
        this.request = request;
        return this;
    }
}