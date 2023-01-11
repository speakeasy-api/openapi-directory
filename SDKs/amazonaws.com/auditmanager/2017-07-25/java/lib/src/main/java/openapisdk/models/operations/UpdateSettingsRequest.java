package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingsRequest {
    public UpdateSettingsHeaders headers;
    public UpdateSettingsRequest withHeaders(UpdateSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSettingsRequestBody request;
    public UpdateSettingsRequest withRequest(UpdateSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}