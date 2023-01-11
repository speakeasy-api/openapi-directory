package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLaunchProfileRequest {
    public UpdateLaunchProfilePathParams pathParams;
    public UpdateLaunchProfileRequest withPathParams(UpdateLaunchProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateLaunchProfileHeaders headers;
    public UpdateLaunchProfileRequest withHeaders(UpdateLaunchProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateLaunchProfileRequestBody request;
    public UpdateLaunchProfileRequest withRequest(UpdateLaunchProfileRequestBody request) {
        this.request = request;
        return this;
    }
}