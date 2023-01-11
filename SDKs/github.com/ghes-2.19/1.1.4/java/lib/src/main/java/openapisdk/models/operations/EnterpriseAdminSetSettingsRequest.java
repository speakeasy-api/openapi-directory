package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetSettingsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminSetSettingsRequestBody request;
    public EnterpriseAdminSetSettingsRequest withRequest(EnterpriseAdminSetSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}