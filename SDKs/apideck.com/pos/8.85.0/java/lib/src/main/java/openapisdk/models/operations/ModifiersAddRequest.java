package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersAddRequest {
    public ModifiersAddQueryParams queryParams;
    public ModifiersAddRequest withQueryParams(ModifiersAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ModifiersAddHeaders headers;
    public ModifiersAddRequest withHeaders(ModifiersAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifierInput request;
    public ModifiersAddRequest withRequest(openapisdk.models.shared.ModifierInput request) {
        this.request = request;
        return this;
    }
    public ModifiersAddSecurity security;
    public ModifiersAddRequest withSecurity(ModifiersAddSecurity security) {
        this.security = security;
        return this;
    }
}