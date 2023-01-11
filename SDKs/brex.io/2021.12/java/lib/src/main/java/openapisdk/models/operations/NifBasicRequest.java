package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NifBasicRequest {
    public NifBasicPathParams pathParams;
    public NifBasicRequest withPathParams(NifBasicPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public NifBasicRequestBody request;
    public NifBasicRequest withRequest(NifBasicRequestBody request) {
        this.request = request;
        return this;
    }
    public NifBasicSecurity security;
    public NifBasicRequest withSecurity(NifBasicSecurity security) {
        this.security = security;
        return this;
    }
}