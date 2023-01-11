package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlsblRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AlsblRequestBody request;
    public AlsblRequest withRequest(AlsblRequestBody request) {
        this.request = request;
        return this;
    }
    public AlsblSecurity security;
    public AlsblRequest withSecurity(AlsblSecurity security) {
        this.security = security;
        return this;
    }
}