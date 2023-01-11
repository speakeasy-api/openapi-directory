package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NifComprehensiveRequest {
    public NifComprehensivePathParams pathParams;
    public NifComprehensiveRequest withPathParams(NifComprehensivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public NifComprehensiveRequestBody request;
    public NifComprehensiveRequest withRequest(NifComprehensiveRequestBody request) {
        this.request = request;
        return this;
    }
    public NifComprehensiveSecurity security;
    public NifComprehensiveRequest withSecurity(NifComprehensiveSecurity security) {
        this.security = security;
        return this;
    }
}