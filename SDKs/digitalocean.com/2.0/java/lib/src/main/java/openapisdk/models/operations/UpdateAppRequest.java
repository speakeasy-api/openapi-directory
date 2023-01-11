package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAppRequest {
    public UpdateAppPathParams pathParams;
    public UpdateAppRequest withPathParams(UpdateAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAppRequestBody request;
    public UpdateAppRequest withRequest(UpdateAppRequestBody request) {
        this.request = request;
        return this;
    }
}