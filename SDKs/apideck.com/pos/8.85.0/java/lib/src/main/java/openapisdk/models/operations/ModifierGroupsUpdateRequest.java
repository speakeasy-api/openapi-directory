package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifierGroupsUpdateRequest {
    public ModifierGroupsUpdatePathParams pathParams;
    public ModifierGroupsUpdateRequest withPathParams(ModifierGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ModifierGroupsUpdateQueryParams queryParams;
    public ModifierGroupsUpdateRequest withQueryParams(ModifierGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ModifierGroupsUpdateHeaders headers;
    public ModifierGroupsUpdateRequest withHeaders(ModifierGroupsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifierGroupInput request;
    public ModifierGroupsUpdateRequest withRequest(openapisdk.models.shared.ModifierGroupInput request) {
        this.request = request;
        return this;
    }
    public ModifierGroupsUpdateSecurity security;
    public ModifierGroupsUpdateRequest withSecurity(ModifierGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}