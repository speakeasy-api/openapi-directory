package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApmclRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ApmclRequestBody request;
    public ApmclRequest withRequest(ApmclRequestBody request) {
        this.request = request;
        return this;
    }
    public ApmclSecurity security;
    public ApmclRequest withSecurity(ApmclSecurity security) {
        this.security = security;
        return this;
    }
}