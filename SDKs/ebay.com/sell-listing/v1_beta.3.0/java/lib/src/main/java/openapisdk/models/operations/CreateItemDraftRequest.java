package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateItemDraftRequest {
    public CreateItemDraftHeaders headers;
    public CreateItemDraftRequest withHeaders(CreateItemDraftHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemDraft request;
    public CreateItemDraftRequest withRequest(openapisdk.models.shared.ItemDraft request) {
        this.request = request;
        return this;
    }
    public CreateItemDraftSecurity security;
    public CreateItemDraftRequest withSecurity(CreateItemDraftSecurity security) {
        this.security = security;
        return this;
    }
}