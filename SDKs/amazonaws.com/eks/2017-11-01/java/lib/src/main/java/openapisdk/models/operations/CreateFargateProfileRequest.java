package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFargateProfileRequest {
    public CreateFargateProfilePathParams pathParams;
    public CreateFargateProfileRequest withPathParams(CreateFargateProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateFargateProfileHeaders headers;
    public CreateFargateProfileRequest withHeaders(CreateFargateProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFargateProfileRequestBody request;
    public CreateFargateProfileRequest withRequest(CreateFargateProfileRequestBody request) {
        this.request = request;
        return this;
    }
}