package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProfileRequest {
    public UpdateProfilePathParams pathParams;
    public UpdateProfileRequest withPathParams(UpdateProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateProfileHeaders headers;
    public UpdateProfileRequest withHeaders(UpdateProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateProfileRequestBody request;
    public UpdateProfileRequest withRequest(UpdateProfileRequestBody request) {
        this.request = request;
        return this;
    }
}