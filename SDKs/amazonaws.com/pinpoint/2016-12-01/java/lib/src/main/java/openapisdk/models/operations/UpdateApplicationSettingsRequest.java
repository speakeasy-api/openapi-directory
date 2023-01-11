package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationSettingsRequest {
    public UpdateApplicationSettingsPathParams pathParams;
    public UpdateApplicationSettingsRequest withPathParams(UpdateApplicationSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateApplicationSettingsHeaders headers;
    public UpdateApplicationSettingsRequest withHeaders(UpdateApplicationSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateApplicationSettingsRequestBody request;
    public UpdateApplicationSettingsRequest withRequest(UpdateApplicationSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}