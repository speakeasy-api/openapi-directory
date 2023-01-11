package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecipesRequest {
    public ListRecipesQueryParams queryParams;
    public ListRecipesRequest withQueryParams(ListRecipesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecipesHeaders headers;
    public ListRecipesRequest withHeaders(ListRecipesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRecipesRequest request;
    public ListRecipesRequest withRequest(openapisdk.models.shared.ListRecipesRequest request) {
        this.request = request;
        return this;
    }
}