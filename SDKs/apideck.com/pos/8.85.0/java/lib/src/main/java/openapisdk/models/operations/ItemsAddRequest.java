package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsAddRequest {
    public ItemsAddQueryParams queryParams;
    public ItemsAddRequest withQueryParams(ItemsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ItemsAddHeaders headers;
    public ItemsAddRequest withHeaders(ItemsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemInput request;
    public ItemsAddRequest withRequest(openapisdk.models.shared.ItemInput request) {
        this.request = request;
        return this;
    }
    public ItemsAddSecurity security;
    public ItemsAddRequest withSecurity(ItemsAddSecurity security) {
        this.security = security;
        return this;
    }
}