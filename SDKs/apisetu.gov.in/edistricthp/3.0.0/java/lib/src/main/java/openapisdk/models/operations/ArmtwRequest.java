package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArmtwRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ArmtwRequestBody request;
    public ArmtwRequest withRequest(ArmtwRequestBody request) {
        this.request = request;
        return this;
    }
    public ArmtwSecurity security;
    public ArmtwRequest withSecurity(ArmtwSecurity security) {
        this.security = security;
        return this;
    }
}