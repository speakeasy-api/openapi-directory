package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectUpdateRequest {
    public PrivateProjectUpdatePathParams pathParams;
    public PrivateProjectUpdateRequest withPathParams(PrivateProjectUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectUpdate request;
    public PrivateProjectUpdateRequest withRequest(openapisdk.models.shared.ProjectUpdate request) {
        this.request = request;
        return this;
    }
    public PrivateProjectUpdateSecurity security;
    public PrivateProjectUpdateRequest withSecurity(PrivateProjectUpdateSecurity security) {
        this.security = security;
        return this;
    }
}