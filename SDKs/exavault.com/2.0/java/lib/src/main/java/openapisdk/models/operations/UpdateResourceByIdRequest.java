package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourceByIdRequest {
    public UpdateResourceByIdPathParams pathParams;
    public UpdateResourceByIdRequest withPathParams(UpdateResourceByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateResourceByIdHeaders headers;
    public UpdateResourceByIdRequest withHeaders(UpdateResourceByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateResourceByIdUpdateResourceByIdRequestBody request;
    public UpdateResourceByIdRequest withRequest(UpdateResourceByIdUpdateResourceByIdRequestBody request) {
        this.request = request;
        return this;
    }
}