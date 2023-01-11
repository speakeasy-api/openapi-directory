package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLaunchProfileRequest {
    public CreateLaunchProfilePathParams pathParams;
    public CreateLaunchProfileRequest withPathParams(CreateLaunchProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateLaunchProfileHeaders headers;
    public CreateLaunchProfileRequest withHeaders(CreateLaunchProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateLaunchProfileRequestBody request;
    public CreateLaunchProfileRequest withRequest(CreateLaunchProfileRequestBody request) {
        this.request = request;
        return this;
    }
}