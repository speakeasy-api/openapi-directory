package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchVaultItemRequest {
    public PatchVaultItemPathParams pathParams;
    public PatchVaultItemRequest withPathParams(PatchVaultItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Patch[] request;
    public PatchVaultItemRequest withRequest(openapisdk.models.shared.Patch[] request) {
        this.request = request;
        return this;
    }
    public PatchVaultItemSecurity security;
    public PatchVaultItemRequest withSecurity(PatchVaultItemSecurity security) {
        this.security = security;
        return this;
    }
}