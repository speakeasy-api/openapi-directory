package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminSetUserSettingsRequest {
    public AdminSetUserSettingsHeaders headers;
    public AdminSetUserSettingsRequest withHeaders(AdminSetUserSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminSetUserSettingsRequest request;
    public AdminSetUserSettingsRequest withRequest(openapisdk.models.shared.AdminSetUserSettingsRequest request) {
        this.request = request;
        return this;
    }
}