package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifierGroupsAddRequest {
    public ModifierGroupsAddQueryParams queryParams;
    public ModifierGroupsAddRequest withQueryParams(ModifierGroupsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ModifierGroupsAddHeaders headers;
    public ModifierGroupsAddRequest withHeaders(ModifierGroupsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifierGroupInput request;
    public ModifierGroupsAddRequest withRequest(openapisdk.models.shared.ModifierGroupInput request) {
        this.request = request;
        return this;
    }
    public ModifierGroupsAddSecurity security;
    public ModifierGroupsAddRequest withSecurity(ModifierGroupsAddSecurity security) {
        this.security = security;
        return this;
    }
}