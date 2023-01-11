package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GrredRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GrredRequestBody request;
    public GrredRequest withRequest(GrredRequestBody request) {
        this.request = request;
        return this;
    }
    public GrredSecurity security;
    public GrredRequest withSecurity(GrredSecurity security) {
        this.security = security;
        return this;
    }
}