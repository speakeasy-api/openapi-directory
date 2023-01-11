package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClassRequest {
    public UpdateClassPathParams pathParams;
    public UpdateClassRequest withPathParams(UpdateClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClassUpdate request;
    public UpdateClassRequest withRequest(openapisdk.models.shared.ClassUpdate request) {
        this.request = request;
        return this;
    }
    public UpdateClassSecurity security;
    public UpdateClassRequest withSecurity(UpdateClassSecurity security) {
        this.security = security;
        return this;
    }
}