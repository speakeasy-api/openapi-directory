package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVaultItemRequest {
    public UpdateVaultItemPathParams pathParams;
    public UpdateVaultItemRequest withPathParams(UpdateVaultItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FullItemInput request;
    public UpdateVaultItemRequest withRequest(openapisdk.models.shared.FullItemInput request) {
        this.request = request;
        return this;
    }
    public UpdateVaultItemSecurity security;
    public UpdateVaultItemRequest withSecurity(UpdateVaultItemSecurity security) {
        this.security = security;
        return this;
    }
}