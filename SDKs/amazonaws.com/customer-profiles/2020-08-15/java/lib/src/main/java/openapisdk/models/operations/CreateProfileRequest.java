package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProfileRequest {
    public CreateProfilePathParams pathParams;
    public CreateProfileRequest withPathParams(CreateProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateProfileHeaders headers;
    public CreateProfileRequest withHeaders(CreateProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProfileRequestBody request;
    public CreateProfileRequest withRequest(CreateProfileRequestBody request) {
        this.request = request;
        return this;
    }
}