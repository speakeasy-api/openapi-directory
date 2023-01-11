package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImageRecipesRequest {
    public ListImageRecipesQueryParams queryParams;
    public ListImageRecipesRequest withQueryParams(ListImageRecipesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImageRecipesHeaders headers;
    public ListImageRecipesRequest withHeaders(ListImageRecipesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListImageRecipesRequestBody request;
    public ListImageRecipesRequest withRequest(ListImageRecipesRequestBody request) {
        this.request = request;
        return this;
    }
}