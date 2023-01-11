package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsUpdateRequest {
    public ItemsUpdatePathParams pathParams;
    public ItemsUpdateRequest withPathParams(ItemsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ItemsUpdateQueryParams queryParams;
    public ItemsUpdateRequest withQueryParams(ItemsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ItemsUpdateHeaders headers;
    public ItemsUpdateRequest withHeaders(ItemsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemInput request;
    public ItemsUpdateRequest withRequest(openapisdk.models.shared.ItemInput request) {
        this.request = request;
        return this;
    }
    public ItemsUpdateSecurity security;
    public ItemsUpdateRequest withSecurity(ItemsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}