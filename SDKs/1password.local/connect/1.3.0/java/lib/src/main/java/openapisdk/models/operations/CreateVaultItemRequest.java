package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVaultItemRequest {
    public CreateVaultItemPathParams pathParams;
    public CreateVaultItemRequest withPathParams(CreateVaultItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FullItemInput request;
    public CreateVaultItemRequest withRequest(openapisdk.models.shared.FullItemInput request) {
        this.request = request;
        return this;
    }
    public CreateVaultItemSecurity security;
    public CreateVaultItemRequest withSecurity(CreateVaultItemSecurity security) {
        this.security = security;
        return this;
    }
}