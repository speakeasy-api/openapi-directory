package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectCreate request;
    public PrivateProjectCreateRequest withRequest(openapisdk.models.shared.ProjectCreate request) {
        this.request = request;
        return this;
    }
    public PrivateProjectCreateSecurity security;
    public PrivateProjectCreateRequest withSecurity(PrivateProjectCreateSecurity security) {
        this.security = security;
        return this;
    }
}