package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersUpdateRequest {
    public ModifiersUpdatePathParams pathParams;
    public ModifiersUpdateRequest withPathParams(ModifiersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ModifiersUpdateQueryParams queryParams;
    public ModifiersUpdateRequest withQueryParams(ModifiersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ModifiersUpdateHeaders headers;
    public ModifiersUpdateRequest withHeaders(ModifiersUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifierInput request;
    public ModifiersUpdateRequest withRequest(openapisdk.models.shared.ModifierInput request) {
        this.request = request;
        return this;
    }
    public ModifiersUpdateSecurity security;
    public ModifiersUpdateRequest withSecurity(ModifiersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}