package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToVaultRequest {
    public AddTagsToVaultPathParams pathParams;
    public AddTagsToVaultRequest withPathParams(AddTagsToVaultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddTagsToVaultQueryParams queryParams;
    public AddTagsToVaultRequest withQueryParams(AddTagsToVaultQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AddTagsToVaultHeaders headers;
    public AddTagsToVaultRequest withHeaders(AddTagsToVaultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddTagsToVaultRequestBody request;
    public AddTagsToVaultRequest withRequest(AddTagsToVaultRequestBody request) {
        this.request = request;
        return this;
    }
}